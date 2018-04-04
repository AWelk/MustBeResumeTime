package org._3rev.resume.valueobject;

import java.util.List;

public class Workplace {

    private String employerName;
    private String city;
    private String state;
    private List<Position> positions;
    private String description;
    private List<String> responsibilities;

    public Workplace() {
    }

    public Workplace(String employerName, String city, String state, List<Position> positions, String description, List<String> responsibilities) {
        this.employerName = employerName;
        this.city = city;
        this.state = state;
        this.positions = positions;
        this.description = description;
        this.responsibilities = responsibilities;
    }

    public String getEmployerName() {
        return employerName;
    }

    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public List<Position> getPositions() {
        return positions;
    }

    public void setPositions(List<Position> positions) {
        this.positions = positions;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getResponsibilities() {
        return responsibilities;
    }

    public void setResponsibilities(List<String> responsibilities) {
        this.responsibilities = responsibilities;
    }
}
