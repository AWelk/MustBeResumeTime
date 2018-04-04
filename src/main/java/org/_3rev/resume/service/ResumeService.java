package org._3rev.resume.service;

import org._3rev.resume.dao.ResumeDao;
import org._3rev.resume.valueobject.FormDetail;
import org._3rev.resume.valueobject.FormId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResumeService {

    private ResumeDao resumeDao;

    @Autowired
    public ResumeService(ResumeDao resumeDao) {
        this.resumeDao = resumeDao;
    }

    public List<FormId> getAllFormIds() {
        return resumeDao.getAllFormIds();
    }

    public FormDetail getFormById(String id) {
        return resumeDao.findById(id);
    }

    public void createForm(FormDetail form) {
        resumeDao.save(form);
    }

    public void updateResume(String id, FormDetail form) {
        form.setId(id);
        resumeDao.save(form);
    }

    public void deleteResume(String id) {
        resumeDao.delete(id);
    }
}
