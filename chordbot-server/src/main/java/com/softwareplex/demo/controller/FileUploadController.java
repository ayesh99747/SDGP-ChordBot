package com.softwareplex.demo.controller;

import org.python.core.PyClass;
import org.python.core.PyInteger;
import org.python.core.PyObject;
import org.python.core.PyString;
import org.python.util.PythonInterpreter;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class FileUploadController {


    public static void invokeGetter(String filepath) {
        PythonInterpreter pythonInterpreter = new PythonInterpreter();
        pythonInterpreter.exec("from Chord_Sequencer import ChordSequencer");
        PyClass Chord_SequencerDef = (PyClass) pythonInterpreter.get("ChordSequencer");
        PyObject Chord_Sequencer = Chord_SequencerDef.__call__();
        PyObject pyObject = Chord_Sequencer.invoke("getChords",new PyString("audio.wav"));

        System.out.println(pyObject.toString());
    }


}
