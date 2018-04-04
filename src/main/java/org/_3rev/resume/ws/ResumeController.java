package org._3rev.resume.ws;

import org._3rev.resume.service.ResumeService;
import org._3rev.resume.service.StaticDataService;
import org._3rev.resume.valueobject.FormDetail;
import org._3rev.resume.valueobject.FormId;
import org._3rev.resume.valueobject.State;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ResumeController {

    private ResumeService resumeService;
    private StaticDataService dataService;

    public ResumeController(ResumeService resumeService, StaticDataService dataService) {
        this.resumeService = resumeService;
        this.dataService = dataService;
    }

    @GetMapping(value = "/resumes")
    public List<FormId> getAllFormIds() {
        return resumeService.getAllFormIds();
    }

    @PostMapping(value = "/resumes")
    public void createForm(@RequestBody FormDetail form) {
        resumeService.createForm(form);
    }

    @GetMapping(value = "/resumes/{id}")
    public FormDetail getFormById(@PathVariable("id") String id) {
        return resumeService.getFormById(id);
    }

    @PutMapping(value = "/resumes/{id}")
    public void updateResume(@PathVariable("id") String id, @RequestBody FormDetail form) {
        resumeService.updateResume(id, form);
    }

    @DeleteMapping(value = "/resumes/{id}")
    public void deleteResume(@PathVariable("id") String id) {
        resumeService.deleteResume(id);
    }

    @GetMapping(value = "/states")
    public List<State> getStates() {
        return dataService.getAllStates();
    }
}
