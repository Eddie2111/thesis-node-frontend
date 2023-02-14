import React from "react";
import Sidebar from "./components/sidebar";
import { motion } from "framer-motion";
import { CodeStruct, CodeStruct1, Body1, Code } from "./components/styledComponents";
const Docs = () => {
    const sentence1 = "{'sentence':i}";
    return (
        <>
        
        <Sidebar/>

        <Body1>

        <h1><br/>Docs</h1>
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            transition={{delay: 0.25, duration: 1.0}}>
        <div class="container my-4 docs" >
            <p>I know some of you know how <Code>SOAP / DOS</Code> requests work. </p>
            <br/>
            <p>So I have prepared a script of python to automate your queries. [Do not modify timer and method or else your request might identify as a DDOS request and your IP will be banned.]</p>
            <p>- You will need <Code>Requests</Code> module to make this python script work.</p>
            <p>- Press <Code>Windows key+ R</Code> → Type <Code>cmd</Code> → Type "pip install requests". You should be good to go now.</p>
            <h2>Put your questions in the question list and initiate requests.</h2>
            
    <CodeStruct>

        <Code>import requests,time;</Code><br/><br/>
        <Code>questionList = [</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;"আমি ভাত খাই",</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;"আজ স্কুল বন্ধ",</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;"আজ ছুটির দিন",</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;"এখন বৃষ্টি হচ্ছে"</Code><br/>
        <Code>]</Code><br/>
        <Code>for i in questionList:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;try:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictToSend = {sentence1};</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = requests.post('https://bdslp.onrender.com/recieve', json=dictToSend);</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictFromServer = res.json();</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;except:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)</Code><br/>

    </CodeStruct>
    <br/><br/>

    <p>This might look hell of a work you are submitting questions one by one. So,</p>
    <p>If you have a notepad file with texts, you may use this python script to post data. [I hope you did your 221 well.]</p>
    <h2>Put your questions in notepad file and initiate requests.</h2>

    <CodeStruct1>

        <Code>import requests,time;</Code><br/><br/>

        <Code>def purify(array):</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;ret_array = []; </Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;for i in array:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ret_array.append(i[0:len(i)-2]);</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;return ret_array;</Code><br/><br/>

        <Code>def requester(questionList):</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;for i in questionList:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictToSend = {sentence1};</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res = requests.post('https://bdslp.onrender.com/recieve', json=dictToSend);</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dictFromServer = res.json();</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("array number {} sent".format(questionList.index(i)))</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except:</Code><br/>
        <Code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)</Code><br/><br/>
                
        <Code>file1 = open("text.txt","r+") ### file name here</Code><br/>
        <Code>questionList = purify(file1.readlines())</Code><br/><br/>

        <Code>requester(questionList)</Code>
    </CodeStruct1>
        </div>
        </motion.div>
        </Body1>
        </>
    );
    }

export default Docs;
