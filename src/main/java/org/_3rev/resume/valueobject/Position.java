package org._3rev.resume.valueobject;

public class Position {

    private String position;
    private String startDate;
    private String endDate;

    public Position() {
        super();
    }

    public Position(String position, String startDate, String endDate) {
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
