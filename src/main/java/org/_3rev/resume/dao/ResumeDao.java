package org._3rev.resume.dao;

import org._3rev.resume.valueobject.FormDetail;
import org._3rev.resume.valueobject.FormId;

import java.util.List;

public interface ResumeDao {

    List<FormId> getAllFormIds();

    FormDetail findById(String id);

    int deleteAll();

    void save(FormDetail formDetail);

    void delete(String id);
}
