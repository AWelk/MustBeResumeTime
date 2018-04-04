package org._3rev.resume.service;

import org._3rev.resume.dao.StateDao;
import org._3rev.resume.valueobject.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaticDataService {

    private StateDao stateDao;

    @Autowired
    public StaticDataService(StateDao stateDao) {
        this.stateDao = stateDao;
    }

    public List<State> getAllStates() {
        return stateDao.findAll();
    }

    public void putAllStates(List<State> states) {
        stateDao.insert(states);
    }
}
