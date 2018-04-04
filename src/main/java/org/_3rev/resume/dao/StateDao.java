package org._3rev.resume.dao;

import org._3rev.resume.valueobject.State;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StateDao extends MongoRepository<State, String> {
}
