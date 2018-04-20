package org._3rev.resume.word;

import org._3rev.resume.valueobject.*;
import org.apache.commons.lang3.StringUtils;
import org.docx4j.Docx4J;
import org.docx4j.XmlUtils;
import org.docx4j.openpackaging.exceptions.Docx4JException;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;
import org.docx4j.openpackaging.parts.WordprocessingML.MainDocumentPart;
import org.docx4j.wml.P;
import org.docx4j.wml.R;
import org.docx4j.wml.Text;
import org.springframework.core.io.ClassPathResource;

import javax.xml.bind.JAXBElement;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class TemplateCreator {

    private static final int TITLE = 0;
    private static final int CONTACT = 1;
    private static final int SKILLS = 4;
    private static final int WORK = 8;
    private static final int ED = 13;
    private static final int ED_LENGTH = 3;
    private static final int WORK_LENGTH = 4;
    private static File file;

    static {
        try {
            file = new ClassPathResource("templates/resumeTemplate2.docx").getFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private FormDetail detail;
    private WordprocessingMLPackage wordMLPackage;
    private MainDocumentPart document;
    private List<Object> parts;

    public TemplateCreator() throws Docx4JException {
        wordMLPackage = Docx4J.load(file);
        document = wordMLPackage.getMainDocumentPart();
        parts = document.getContent();
    }

    public TemplateCreator(FormDetail detail) throws Docx4JException {
        this.detail = detail;
        wordMLPackage = Docx4J.load(file);
        document = wordMLPackage.getMainDocumentPart();
        parts = document.getContent();
    }

    public ByteArrayOutputStream test() throws Docx4JException {
        ByteArrayOutputStream file = new ByteArrayOutputStream();

        wordMLPackage.save(file);

        return file;
    }

    public ByteArrayOutputStream printResume() throws Docx4JException {
        setEd();
        setWork();
        setSkills();
        setContact(parts.get(1), detail);
        setTitle(parts.get(0), detail);

        ByteArrayOutputStream file = new ByteArrayOutputStream();

        wordMLPackage.save(file);

        return file;
    }

    private void setSkills() {
        List<String> skills = detail.getMiscForm().getSkills();
        skills.addAll(detail.getMiscForm().getExpertise());
        addSkills(skills);
    }

    private void addSkills(List<String> skills) {
        if (skills.size() > 1) {
            for (int i = 1; i < skills.size() - 1; i++) {
                parts.add(SKILLS, XmlUtils.deepCopy(parts.get(SKILLS)));
            }
        }

        String lastSkill = skills.remove(skills.size() - 1);

        int i = SKILLS;
        for (String s : skills) {
            setParagraphText(parts.get(i), s);
            i++;
        }

        setParagraphText(parts.get(i), lastSkill);
    }

    private void setEd() {
        EdForm edForm = detail.getEdForm();
        List<Institution> institutions = edForm.getInstitutions();
        if (institutions.isEmpty()) {
            parts.removeAll(parts.subList(ED - 1, parts.size()));
            return;
        }

        if (institutions.size() > 1) {
            addEds();
        }

        for (int i = ED, ed = 0; i < ED + (institutions.size() * ED_LENGTH); i += ED_LENGTH, ed++) {
            setSchool(i, institutions.get(ed));
        }
    }

    private void setWork() {
        WorkForm workForm = detail.getWorkForm();
        List<Workplace> workplaces = workForm.getWorkplaces();
        if (workplaces.isEmpty()) {
            parts.removeAll(parts.subList(WORK - 1, WORK + WORK_LENGTH));
            return;
        }

        if (workplaces.size() > 1) {
            addWorks();
        }

        for (int i = WORK + ((workplaces.size() - 1) * WORK_LENGTH), work = workplaces.size() - 1; i >= WORK; i -= WORK_LENGTH, work--) {
            setWorkplace(i, workplaces.get(work));
        }
    }

    private void setWorkplace(int i, Workplace workplace) {
        setWorkResponsibilities(i, workplace.getResponsibilities());
        setWorkDescription((P) parts.get(i + 2), workplace.getDescription());
        setWorkPositions(i, workplace.getPositions());
        setWorkHeader((P) parts.get(i), workplace);
    }

    private void setWorkPositions(int workNum, List<Position> positions) {
        int posStart = workNum + 1;
        if (positions.size() > 1) {
            addPositions(posStart, positions);
        }
    }

    private void addPositions(int posStart, List<Position> positions) {
        for (int i = 1; i < positions.size(); i++) {
            parts.add(posStart, XmlUtils.deepCopy(parts.get(posStart)));
        }

        int i = posStart;
        for (Position position : positions) {
            setParagraphText(parts.get(i), position.getPosition() + " (" + position.getStartDate() + " - " + position.getEndDate() + ")");
            i++;
        }
    }

    private void setWorkDescription(P desc, String description) {
        setParagraphText(desc, description);
    }

    private void setWorkResponsibilities(int workNum, List<String> responsibilities) {
        int respStart = workNum + 3;
        if (responsibilities.size() > 1) {
            addResponsibilities(respStart, responsibilities);
        }

        int i = respStart;
        for (String responsibility : responsibilities) {
            setParagraphText(parts.get(i), responsibility);
            i++;
        }
    }

    private void addResponsibilities(int respStart, List<String> responsibilities) {
        for (int i = 1; i < responsibilities.size(); i++) {
            parts.add(respStart, XmlUtils.deepCopy(parts.get(respStart)));
        }
    }

    private void setWorkHeader(P header, Workplace workplace) {
        List<Object> parts = header.getContent();
        setRunText(parts.get(0), workplace.getEmployerName());
        setRunText(parts.get(2), "| " + workplace.getCity() + ", " + workplace.getState());
    }

    private void setTitle(Object title, FormDetail form) {
        String fullName = form.getContactForm().getFirstName() + " " + form.getContactForm().getLastName();
        setParagraphText(title, fullName);
    }

    private void setContact(Object contact, FormDetail form) {
        ContactForm contactForm = form.getContactForm();
        List<Object> content = ((P) contact).getContent();
        int piecesSet = 0;

        if (!StringUtils.isEmpty(contactForm.getAddLine1())) {
            StringBuilder address = new StringBuilder();
            address.append(contactForm.getAddLine1());

            if (!StringUtils.isEmpty(contactForm.getAddLine2())) {
                address.append(", ").append(contactForm.getAddLine1());
            }

            address.append(", ").append(contactForm.getCity()).append(", ")
                    .append(contactForm.getState()).append(" ").append(contactForm.getZip());
            setNextContact(content.get(piecesSet), address.toString());
            piecesSet++;
        }

        if (!StringUtils.isEmpty(contactForm.getPhone())) {
            setNextContact(content.get(piecesSet), contactForm.getPhone());
            piecesSet++;
        }

        if (!StringUtils.isEmpty(contactForm.getEmail())) {
            setNextContact(content.get(piecesSet), contactForm.getEmail());
            piecesSet++;
        }

        if (piecesSet == 0) {

        } else {
            for (int i = piecesSet; i < 3; i++) {
                content.remove(i);
            }
        }
    }

    private void setParagraphText(P paragraph, String content) {
        R run = (R) paragraph.getContent().get(0);
        setRunText(run, content);
    }

    private void setParagraphText(Object o, String content) {
        P paragraph = (P) o;
        setParagraphText(paragraph, content);
    }

    private void setRunText(R run, String content) {
        JAXBElement element = (JAXBElement) run.getContent().get(0);
        setElementText(element, content);
    }

    private void setRunText(Object o, String content) {
        R run = (R) o;
        setRunText(run, content);
    }

    private void setElementText(JAXBElement element, String content) {
        Text text = (Text) element.getValue();
        text.setValue(content);
    }

    private void setElementText(Object element, String content) {
        JAXBElement e = (JAXBElement) element;
        setElementText(e, content);
    }

    private void setNextContact(Object o, String content) {
        R run = (R) o;
        List<Object> parts = run.getContent();
        JAXBElement element = (JAXBElement) parts.get(parts.size() - 1);
        Text text = (Text) element.getValue();
        text.setValue(content);
    }

    private void addWorks() {
        List<Object> workplaces = parts.subList(WORK, WORK + WORK_LENGTH);
        List<Object> copy = new ArrayList<>();
        for (Object o : workplaces) {
            copy.add(XmlUtils.deepCopy(o));
        }
        parts.addAll(WORK, copy);
    }

    private void addEds() {
        List<Object> eds = parts.subList(ED, ED + ED_LENGTH);
        List<Object> copy = new ArrayList<>();
        for (Object o : eds) {
            copy.add(XmlUtils.deepCopy(o));
        }
        parts.addAll(ED, copy);
    }

    private void setSchool(int ed, Institution institution) {
        setSchoolHeader((P) parts.get(ed), institution);
        setDegree((P) parts.get(ed + 1), institution);
        setSchoolDescription((P) parts.get(ed + 2), institution);
    }

    private void setSchoolHeader(P header, Institution institution) {
        List<Object> parts = header.getContent();
        setRunText(parts.get(0), institution.getInstitution());
        setRunText(parts.get(3), " " + institution.getCity() + ", " + institution.getState());
    }

    private void setDegree(P degree, Institution institution) {
        setParagraphText(degree, institution.getDegree() + " (" + institution.getStartDate() + " - " + institution.getEndDate() + ")");
    }

    private void setSchoolDescription(P description, Institution institution) {
        setParagraphText(description, institution.getAchievements());
    }
}
