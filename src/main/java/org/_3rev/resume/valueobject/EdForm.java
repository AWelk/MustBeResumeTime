package org._3rev.resume.valueobject;

import java.util.List;

public class EdForm {

    private List<Institution> institutions;

    public EdForm() {
        super();
    }

    public EdForm(List<Institution> institutions) {
        this.institutions = institutions;
    }

    public List<Institution> getInstitutions() {
        return institutions;
    }

    public void setInstitutions(List<Institution> institutions) {
        this.institutions = institutions;
    }
}
