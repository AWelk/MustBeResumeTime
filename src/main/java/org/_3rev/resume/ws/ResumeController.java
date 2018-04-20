package org._3rev.resume.ws;

import org._3rev.resume.service.PrintService;
import org._3rev.resume.service.ResumeService;
import org._3rev.resume.service.StaticDataService;
import org._3rev.resume.valueobject.FormDetail;
import org._3rev.resume.valueobject.FormId;
import org._3rev.resume.valueobject.State;
import org.docx4j.openpackaging.exceptions.Docx4JException;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ResumeController {

    private ResumeService resumeService;
    private StaticDataService dataService;
    private PrintService printService;

    public ResumeController(ResumeService resumeService, StaticDataService dataService, PrintService printService) {
        this.resumeService = resumeService;
        this.dataService = dataService;
        this.printService = printService;
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

//    @PostMapping(value = "/resumes/print", produces = "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
//    public @ResponseBody byte[] printResume(@RequestBody FormDetail form) throws Docx4JException, IOException {
//        InputStream stream = printService.printResume(form);
//        return IOUtils.toByteArray(stream);
//    }

    @PostMapping(value = "/resumes/print")
    public ResponseEntity<Resource> printResume(@RequestBody FormDetail form) throws Docx4JException, IOException {
        InputStream stream = printService.printResume(form);
        InputStreamResource resource = new InputStreamResource(stream);
        String filename = form.getContactForm().getFirstName() + " " + form.getContactForm().getLastName() + " Resume - " + new Date().toString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=" + filename + ".docx");
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))
                .body(resource);
    }

    @GetMapping(value = "/test", produces = "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    public ResponseEntity<Resource> test() throws Docx4JException, IOException {
        InputStream stream = printService.printResume();
        InputStreamResource resource = new InputStreamResource(stream);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=myfile.docx");
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))
                .body(resource);
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
