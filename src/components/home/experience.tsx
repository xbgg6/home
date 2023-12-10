import * as React from "react"

import { TagsTwoTone } from "@ant-design/icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const yunwei = [
	'Kubernetes',
	'OpenShift',
	'OpenStack',
	'KVM',
	'Hyper-V',
	'Proxmox VE',
	'Docker',
	'Podman',
	'LXC',
	'Zstack',
	'LVS',
	'Keepalived',
	'Ansible',
	'Prometheus',
	'Grafana',
	'Zabbix',
	'Elasticsearch',
	'Ceph',
	'Apisix',
	'Nginx',
	'Apache',
	'Tomcat',
	'Caddy',
	'NFS,,SAMBA,ISCSI,SAN',
	'ESXI,vCenter,Harbor,Horizon',
]


const backend = [
  'Node.js',
  'Express',
  'MongoDB',
  'RabbitMQ',
  'MySQL',
  'Go',
  'PostgreSQL',
  'Redis',
  'JAVA',
  'Spring Boot',
  'Spring Cloud',
  'HTML、CSS、JavaScript',
  'React',
  'Next.js',
  'Ant Design',
   'Vue',
  'TypeScript',
]

const others = [
  'Git',
  'Postman',
  'ApiPost',
  'Burpsuite',
  'OpenWrt',
  'Home All in Boom'
]


const Experience = () => {
  return (
    <section id="experience" className="flex flex-col justify-content: start; text-center min-h-screen py-16">
      <div>
        <p className="text-md">Experience</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">经验</h1>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between gap-4  max-lg:flex-col">
          <Card className="flex-1 shadow-none ">
            <CardHeader>
              <CardTitle>开发</CardTitle>
              <CardDescription>Development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {
                  backend.map((item,index) => {
                    return (
                      <div key={`backend-${index}`} className="flex items-center gap-2">
                        <TagsTwoTone />
                        <span>{item}</span>
                      </div>
                    )
                  })
                }
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-none ">
            <CardHeader>
              <CardTitle>运维</CardTitle>
              <CardDescription>Operation and maintenance </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {
                  yunwei.map((item,index) => {
                    return (
                      <div key={`yunwei-${index}`} className="flex items-center gap-2">
                        <TagsTwoTone />
                        <span>{item}</span>
                      </div>
                    )
                  })
                }
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="shadow-none ">
          <CardHeader>
            <CardTitle>其他</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {
                others.map((item,index) => {
                  return (
                    <div key={`others-${index}`} className="flex items-center gap-2">
                      <TagsTwoTone />
                      <span>{item}</span>
                    </div>
                  )
                })
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Experience;