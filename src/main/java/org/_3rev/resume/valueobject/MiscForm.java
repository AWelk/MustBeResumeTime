package org._3rev.resume.valueobject;

import java.util.List;

public class MiscForm {

    private List<String> skills;
    private List<String> expertise;

    public MiscForm() {
        super();
    }

    public MiscForm(List<String> skills, List<String> expertise) {
        this.skills = skills;
        this.expertise = expertise;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<String> getExpertise() {
        return expertise;
    }

    public void setExpertise(List<String> expertise) {
        this.expertise = expertise;
    }
}
