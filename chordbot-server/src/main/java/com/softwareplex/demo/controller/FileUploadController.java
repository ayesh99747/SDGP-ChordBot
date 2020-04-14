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
        try{
            ProcessBuilder pb = new ProcessBuilder("python","C:\\Users\\ayesh\\SDGP-ChordBot\\chordbot-server\\src\\main\\java\\com\\softwareplex\\demo\\resources\\Chord_Sequencer.py","C:\\Users\\ayesh\\SDGP-ChordBot\\chordbot-server\\src\\main\\java\\com\\softwareplex\\demo\\resources\\Uploads\\audio.wav");
            Process p = pb.start();

            BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String ret = in.readLine();
            System.out.println("value is : "+ret);
        }catch(Exception e){System.out.println(e);}
    }

}
