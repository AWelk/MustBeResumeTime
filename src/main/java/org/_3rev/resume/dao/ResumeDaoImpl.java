package org._3rev.resume.dao;

import org._3rev.resume.valueobject.FormDetail;
import org._3rev.resume.valueobject.FormId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ResumeDaoImpl implements ResumeDao {

    private MongoTemplate mongoTemplate;

    @Autowired
    public ResumeDaoImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<FormId> getAllFormIds() {
        return mongoTemplate.findAll(FormDetail.class).stream()
                .map(FormDetail::toFormId)
                .sorted(Comparator.comparing(FormId::getCreatedOn).reversed())
                .collect(Collectors.toList());
    }

    @Override
    public FormDetail findById(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findOne(query, FormDetail.class);
    }

    @Override
    public int deleteAll() {
        return mongoTemplate.remove(new Query(), "formDetail").getN();
    }

    @Override
    public void save(FormDetail formDetail) {
        mongoTemplate.save(formDetail);
    }

    @Override
    public void delete(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        mongoTemplate.remove(query, FormDetail.class);
    }
}
