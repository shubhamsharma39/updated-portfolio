"use client";

import { motion } from "framer-motion";
import { Terminal, Code, CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

const codeSnippet = `import boto3
import logging
from datetime import datetime

logger = logging.getLogger('DeploymentMonitor')
logger.setLevel(logging.INFO)

def monitor_ec2_health(instance_id):
    """
    Automated health check and recovery script
    Triggered via EventBridge on state change
    """
    ec2 = boto3.client('ec2')
    
    try:
        status = ec2.describe_instance_status(
            InstanceIds=[instance_id]
        )
        
        state = status['InstanceStatuses'][0]['InstanceState']['Name']
        if state != 'running':
            logger.warning(f"Instance {instance_id} is {state}. Attempting recovery...")
            ec2.start_instances(InstanceIds=[instance_id])
            return {"status": "recovering", "id": instance_id}
            
        return {"status": "healthy", "id": instance_id}
        
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise e`;

export default function PythonSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="python" className="py-24 w-full relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm">
            <Code size={16} /> Python in DevOps
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Automation</span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            I leverage Python to script complex automation workflows, eliminating manual toil. From AWS infrastructure management using <span className="text-cyan-300 font-semibold">Boto3</span>, to log analysis, reporting, and CI/CD triggers, Python is the glue that holds robust pipelines together.
          </p>
          
          <ul className="space-y-4 pt-4">
            {["Automated Cloud Provisioning", "Log Monitoring & Alerting", "Cost Optimization Scripts", "Custom CI/CD Hooks"].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-3 text-gray-300"
              >
                <CheckCircle size={20} className="text-cyan-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Code Window */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="rounded-xl overflow-hidden glass-card border-gray-800 shadow-2xl relative group">
            <div className="bg-[#0d1326] px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-gray-500 text-xs font-mono flex items-center gap-2">
                <Terminal size={12} /> auto_recover.py
              </div>
              <button 
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-cyan-400 transition-colors"
                title="Copy code"
              >
                <Copy size={16} />
              </button>
            </div>
            
            <div className="p-6 overflow-x-auto bg-[#010314]/80 text-sm md:text-base">
              <pre className="font-mono text-gray-300 relative">
                <code>
                  <span className="text-purple-400">import</span> boto3{"\n"}
                  <span className="text-purple-400">import</span> logging{"\n"}
                  <span className="text-purple-400">from</span> datetime <span className="text-purple-400">import</span> datetime{"\n\n"}
                  
                  logger = logging.getLogger(<span className="text-green-400">'DeploymentMonitor'</span>){"\n"}
                  logger.setLevel(logging.INFO){"\n\n"}
                  
                  <span className="text-purple-400">def</span> <span className="text-cyan-400">monitor_ec2_health</span>(instance_id):{"\n"}
                  <span className="text-gray-500">    """{"\n"}
                      Automated health check and recovery script{"\n"}
                      Triggered via EventBridge on state change{"\n"}
                      """</span>{"\n"}
                  {"    "}ec2 = boto3.client(<span className="text-green-400">'ec2'</span>){"\n\n"}
                  {"    "}<span className="text-purple-400">try</span>:{"\n"}
                  {"        "}status = ec2.describe_instance_status({"\n"}
                  {"            "}InstanceIds=[instance_id]{"\n"}
                  {"        "}){"\n\n"}
                  {"        "}state = status[<span className="text-green-400">'InstanceStatuses'</span>][<span className="text-orange-400">0</span>][<span className="text-green-400">'InstanceState'</span>][<span className="text-green-400">'Name'</span>]{"\n"}
                  {"        "}<span className="text-purple-400">if</span> state != <span className="text-green-400">'running'</span>:{"\n"}
                  {"            "}logger.warning(<span className="text-cyan-300">f"Instance </span>{"{instance_id}"}<span className="text-cyan-300"> is </span>{"{state}"}<span className="text-cyan-300">. Attempting recovery..."</span>){"\n"}
                  {"            "}ec2.start_instances(InstanceIds=[instance_id]){"\n"}
                  {"            "}<span className="text-purple-400">return</span> {"{"}<span className="text-green-400">"status"</span>: <span className="text-green-400">"recovering"</span>, <span className="text-green-400">"id"</span>: instance_id{"}"}{"\n\n"}
                  {"        "}<span className="text-purple-400">return</span> {"{"}<span className="text-green-400">"status"</span>: <span className="text-green-400">"healthy"</span>, <span className="text-green-400">"id"</span>: instance_id{"}"}{"\n\n"}
                  {"    "}<span className="text-purple-400">except</span> <span className="text-yellow-300">Exception</span> <span className="text-purple-400">as</span> e:{"\n"}
                  {"        "}logger.error(<span className="text-cyan-300">f"Health check failed: </span>{"{str(e)}"}<span className="text-cyan-300">"</span>){"\n"}
                  {"        "}<span className="text-purple-400">raise</span> e
                </code>
              </pre>
              
              {copied && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-md flex items-center gap-2 backdrop-blur-sm"
                >
                  <CheckCircle size={16} /> Copied!
                </motion.div>
              )}
            </div>
            
            {/* Soft border glow overlay */}
            <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none group-hover:border-cyan-500/30 transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
