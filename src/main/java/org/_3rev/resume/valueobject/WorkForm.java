package org._3rev.resume.valueobject;

import java.util.List;

public class WorkForm {

    private List<Workplace> workplaces;

    public WorkForm() {
        super();
    }

    public WorkForm(List<Workplace> workplaces) {
        this.workplaces = workplaces;
    }

    public List<Workplace> getWorkplaces() {
        return workplaces;
    }

    public void setWorkplaces(List<Workplace> workplaces) {
        this.workplaces = workplaces;
    }
}
