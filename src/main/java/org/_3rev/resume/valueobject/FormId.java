package org._3rev.resume.valueobject;

import java.util.Date;

public class FormId {

    private String id;
    private String name;
    private Date createdOn;
    private Date editedOn;

    FormId(String id, String name, Date createdOn, Date editedOn) {
        this.id = id;
        this.name = name;
        this.createdOn = createdOn;
        this.editedOn = editedOn;
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
}
