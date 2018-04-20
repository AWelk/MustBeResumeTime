package org._3rev.resume.valueobject;

public class Institution {

    private String institution;
    private String city;
    private String state;
    private String degree;
    private String achievements;

    public Institution() {
        super();
    }

    public Institution(String institution, String city, String state, String degree, String achievements) {
        this.institution = institution;
        this.city = city;
        this.state = state;
        this.degree = degree;
        this.achievements = achievements;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
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

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getAchievements() {
        return achievements;
    }

    public void setAchievements(String achievements) {
        this.achievements = achievements;
    }
}
