package org._3rev.resume.service;

import org._3rev.resume.valueobject.FormDetail;
import org._3rev.resume.word.TemplateCreator;
import org.docx4j.openpackaging.exceptions.Docx4JException;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;

@Service
public class PrintService {

    public InputStream printResume(FormDetail form) throws Docx4JException {
        TemplateCreator template = new TemplateCreator(form);
        ByteArrayOutputStream file = template.printResume();
        InputStream s = new ByteArrayInputStream(file.toByteArray());
        return s;
    }

    public InputStream printResume() throws Docx4JException {
        TemplateCreator template = new TemplateCreator();
        ByteArrayOutputStream file = template.test();
        InputStream s = new ByteArrayInputStream(file.toByteArray());
        return s;
    }
}
