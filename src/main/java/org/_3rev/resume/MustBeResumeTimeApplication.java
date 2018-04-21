package org._3rev.resume;

import org._3rev.resume.dao.ResumeDao;
import org._3rev.resume.dao.StateDao;
import org._3rev.resume.valueobject.*;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.*;

@SpringBootApplication
public class MustBeResumeTimeApplication {

    @Value("${devmode}")
    private String devMode;

    public static void main(String[] args) {
        SpringApplication.run(MustBeResumeTimeApplication.class, args);
    }

    @Bean
    CommandLineRunner init(ResumeDao resumeDao, StateDao stateDao) {
        return args -> {

            if (Boolean.parseBoolean(devMode)) {
                resumeDao.deleteAll();

                int num = new Random().nextInt(7) + 3;
                for (int i = 0; i < num; i++) {
                    resumeDao.save(getRandResume());
                }
            }

            stateDao.deleteAll();
            stateDao.insert(getAllStates());
        };
    }

    private FormDetail getRandResume() {
        return new FormDetail(randString(), new Date(), new Date(), getContactForm(), getWorkForm(), getEdForm(), getMiscForm());
    }

    private ContactForm getContactForm() {
        return new ContactForm(randString(), randString(), randString(), randString(), randString(), randString(), randString(), randString(), randString());
    }

    private EdForm getEdForm() {
        return new EdForm(getRandomInst());
    }

    private WorkForm getWorkForm() {
        return new WorkForm(getRandomWork());
    }

    private MiscForm getMiscForm() {
        return new MiscForm(randStrings(), randStrings());
    }

    private List<Workplace> getRandomWork() {
        int num = new Random().nextInt(3) + 1;
        List<Workplace> ints = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            ints.add(new Workplace(randString(), randString(), randString(), getRandPosition(), randString(), getRandResp()));
        }
        return ints;
    }

    private List<Position> getRandPosition() {
        int num = new Random().nextInt(3) + 1;
        List<Position> ints = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            ints.add(new Position(randString(), randString(), randString()));
        }
        return ints;
    }

    private List<String> getRandResp() {
        return randStrings();
    }

    private List<Institution> getRandomInst() {
        int num = new Random().nextInt(3) + 1;
        List<Institution> ints = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            ints.add(new Institution(randString(), randString(), randString(), randString(), randString()));
        }
        return ints;
    }

    private String randString() {
        return RandomStringUtils.randomAlphabetic(new Random().nextInt(12) + 1);
    }

    private List<String> randStrings() {
        int num = new Random().nextInt(3) + 1;
        List<String> ints = new ArrayList<>();
        for (int i = 0; i < num; i++) {
            ints.add(randString());
        }
        return ints;
    }

    private List<State> getAllStates() {
        return Arrays.asList(
                new State("AL", "Alabama"),
                new State("AK", "Alaska"),
                new State("AZ", "Arizona"),
                new State("AR", "Arkansas"),
                new State("CA", "California"),
                new State("CO", "Colorado"),
                new State("CT", "Connecticut"),
                new State("DE", "Delaware"),
                new State("FL", "Florida"),
                new State("GA", "Georgia"),
                new State("HI", "Hawaii"),
                new State("ID", "Idaho"),
                new State("IL", "Illinois"),
                new State("IN", "Indiana"),
                new State("IA", "Iowa"),
                new State("KS", "Kansas"),
                new State("KY", "Kentucky"),
                new State("LA", "Louisiana"),
                new State("ME", "Maine"),
                new State("MD", "Maryland"),
                new State("MA", "Massachusetts"),
                new State("MI", "Michigan"),
                new State("MN", "Minnesota"),
                new State("MS", "Mississippi"),
                new State("MO", "Missouri"),
                new State("MT", "Montana"),
                new State("NE", "Nebraska"),
                new State("NV", "Nevada"),
                new State("NH", "New Hampshire"),
                new State("NJ", "New Jersey"),
                new State("NM", "New Mexico"),
                new State("NY", "New York"),
                new State("NC", "North Carolina"),
                new State("ND", "North Dakota"),
                new State("OH", "Ohio"),
                new State("OK", "Oklahoma"),
                new State("OR", "Oregon"),
                new State("PA", "Pennsylvania"),
                new State("RI", "Rhode Island"),
                new State("SC", "South Carolina"),
                new State("SD", "South Dakota"),
                new State("TN", "Tennessee"),
                new State("TX", "Texas"),
                new State("UT", "Utah"),
                new State("VT", "Vermont"),
                new State("VA", "Virginia"),
                new State("WA", "Washington"),
                new State("WV", "West Virginia"),
                new State("WI", "Wisconsin"),
                new State("WY", "Wyoming")
        );
    }
}
