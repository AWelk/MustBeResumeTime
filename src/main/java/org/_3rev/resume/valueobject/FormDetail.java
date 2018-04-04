package org._3rev.resume.valueobject;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class FormDetail {

    @Id
    private String id;
    private String name;
    private Date createdOn;
    private Date editedOn;
    private ContactForm contactForm;
    private WorkForm workForm;
    private EdForm edForm;
    private MiscForm miscForm;

    public FormDetail() {
        super();
    }

    public FormDetail(String name, Date createdOn, Date editedOn, ContactForm contactForm, WorkForm workForm, EdForm edForm, MiscForm miscForm) {
        this.name = name;
        this.createdOn = createdOn;
        this.editedOn = editedOn;
        this.contactForm = contactForm;
        this.workForm = workForm;
        this.edForm = edForm;
        this.miscForm = miscForm;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getEditedOn() {
        return editedOn;
    }

    public void setEditedOn(Date editedOn) {
        this.editedOn = editedOn;
    }

    public ContactForm getContactForm() {
        return contactForm;
    }

    public void setContactForm(ContactForm contactForm) {
        this.contactForm = contactForm;
    }

    public WorkForm getWorkForm() {
        return workForm;
    }

    public void setWorkForm(WorkForm workForm) {
        this.workForm = workForm;
    }

    public EdForm getEdForm() {
        return edForm;
    }

    public void setEdForm(EdForm edForm) {
        this.edForm = edForm;
    }

    public MiscForm getMiscForm() {
        return miscForm;
    }

    public void setMiscForm(MiscForm miscForm) {
        this.miscForm = miscForm;
    }

    public FormId toFormId() {
        return new FormId(this.id, this.name, this.createdOn, this.editedOn);
    }
}
