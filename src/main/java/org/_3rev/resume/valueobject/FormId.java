package org._3rev.resume.valueobject;

public class FormId {

    private String id;
    private String name;
    private long createdOn;
    private long editedOn;

    FormId(String id, String name, long createdOn, long editedOn) {
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

    public long getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(long createdOn) {
        this.createdOn = createdOn;
    }

    public long getEditedOn() {
        return editedOn;
    }

    public void setEditedOn(long editedOn) {
        this.editedOn = editedOn;
    }
}
