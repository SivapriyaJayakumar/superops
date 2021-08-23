import './App.css';
import React from 'react';
import {Modal,Button ,ModalBody,Card,CardBody, CardImg,CardText} from 'reactstrap';
class App extends React.Component{
 constructor(props){
   super(props);
   this.state={
     isToggleModal:false,
     id:0,
     
   }
  
 }
 
  render()
  {
    const isToggleModal=()=>{
      this.setState({
        isToggleModal:!this.state.isToggleModal
      })
    }  
    var i=0,j=0;
    const company=[
      {
        src:'./assets/teamviewer.jpg',
        altTxt:"Team Viewer",
        id:0,
      },
      {
        src:'./assets/splashtop.jpg',
        altTxt:"Splash Top",
        id:1,
      },
      {
        src:'./assets/quickbooks.jpg',
        altTxt:"Quick Books",
        id:2,
      },
      {
        src:'./assets/connectwise.jpg',
        altTxt:"ConnectWise Control",
        id:3,
      },
      {
        src:'./assets/xero.jpg',
        altTxt:"Xero",
        id:4,
      }
    ]
    const bulkcardid=['intelligent','unified','modern'];
    const custid=['fb1','fb2','fb3'];
    const getUnified=()=>{
      document.getElementById('experiencediv').style.backgroundColor="rgba(255,241,240,0.5)";
      document.getElementById('intelligent').style.display="none";
      document.getElementById('unified').style.display="block";
      document.getElementById('unibtn').classList.add("expbtnclick"); 
      document.getElementById('unidot').classList.add("dotclick"); 
      document.getElementById('moddot').classList.remove("dotclick");
      document.getElementById('intdot').classList.remove("dotclick");
      document.getElementById('modbtn').classList.remove("expbtnclick");
      document.getElementById('intbtn').classList.remove("expbtnclick");  
    }
    const getModern=()=>{
      document.getElementById('experiencediv').style.backgroundColor="rgba(255,248,223,0.5)";
      document.getElementById('intelligent').style.display="none";
      document.getElementById('modbtn').classList.add("expbtnclick");
      document.getElementById('moddot').classList.add("dotclick");
      document.getElementById('unidot').classList.remove("dotclick");
      document.getElementById('intdot').classList.remove("dotclick");
      document.getElementById('unified').style.display="none";  
      document.getElementById('modern').style.display="block";
      document.getElementById('intbtn').classList.remove("expbtnclick");  
      document.getElementById('unibtn').classList.remove("expbtnclick"); 
    }
    const getGeeshan=()=>{
      document.getElementById('fb1').style.display="block";
      document.getElementById('fb2').style.display="none";
      document.getElementById('fb3').style.display="none";
      document.getElementById('fbp1').style.borderColor="#f20c59";
      document.getElementById('fbp2').style.borderColor="#D1D5DB";
      document.getElementById('fbp3').style.borderColor="#D1D5DB";
      document.getElementById('custtext').style.backgroundColor="#eae8ff";
    }
    const getRon=()=>{
      document.getElementById('fb1').style.display="none";
      document.getElementById('fb2').style.display="block";
      document.getElementById('fb3').style.display="none";
      document.getElementById('fbp1').style.borderColor="#D1D5DB";
      document.getElementById('fbp2').style.borderColor="#f20c59";
      document.getElementById('fbp3').style.borderColor="#D1D5DB";
      document.getElementById('custtext').style.backgroundColor="#dcecff";
    }
    const getRobbie=()=>{
      document.getElementById('fb1').style.display="none";
      document.getElementById('fb2').style.display="none";
      document.getElementById('fb3').style.display="block";
      document.getElementById('fbp1').style.borderColor="#D1D5DB";
      document.getElementById('fbp2').style.borderColor="#D1D5DB";
      document.getElementById('fbp3').style.borderColor="#f20c59";
      document.getElementById('custtext').style.backgroundColor="#fcf0f1";
    }
    const getIntelligent=()=>{
      document.getElementById('experiencediv').style.backgroundColor="rgba(243,238,253,0.5)";
      document.getElementById('intelligent').style.display="block";
      document.getElementById('modbtn').classList.remove("expbtnclick");
      document.getElementById('intdot').classList.add("dotclick");
      document.getElementById('moddot').classList.remove("dotclick");
      document.getElementById('unidot').classList.remove("dotclick");
      document.getElementById('unified').style.display="none";  
      document.getElementById('modern').style.display="none";  
      document.getElementById('unibtn').classList.remove("expbtnclick"); 
      document.getElementById('intbtn').classList.add("expbtnclick"); 
    }
    return(
      <div>
        
        <Modal isOpen={this.state.isToggleModal} toggle={isToggleModal} contentClassName="modalvideo">
            <div style={{textAlign:"right"}}> <Button className="close" onClick={isToggleModal}>X</Button></div>
            <ModalBody>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/OinjEEOzres" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </ModalBody>
        </Modal>
        
        <div className="header">
          <div className="headline">All-in-one MSP </div>  
          <div className="headline">platform for new-age</div> 
          <div className="headline">IT service delivery</div> 
          <div className="pinkstrike">
            <svg width="567" height="23" viewBox="0 0 567 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.99983 15.2431C33.2956 12.318 114.14 7.02999 228.833 6.10516C321.226 5.36015 435.585 7.44654 562.657 15.8804" stroke="#FF0055" strokeWidth="7.28314" strokeLinecap="round"></path></svg>
          </div>
          <div className="introtext">
            <span className="introtext1">SuperOps.ai is the PSA-RMM platform</span> 
            <span className="introtext1">powered by intelligent automation</span>
          </div>
          <div className="getstartedbtndiv">
            <button className="getstartedbtn" type="button">GET STARTED FOR FREE <img  alt="img" className="arrow" src="./assets/arrow.svg"></img></button>
          </div>
        </div>
     
        <div className="proscons">
          <div className="prosconsmain">
          <svg width="47" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="position-absolute twisted-wire"><path fillRule="evenodd" clipRule="evenodd" d="M23.9137 30.3637C26.9673 30.6641 29.0695 28.9587 29.5766 28.4194C30.5632 27.3702 29.7221 26.4743 29.1896 25.9736C28.5214 25.3452 26.772 23.9055 25.5217 25.2352C23.5323 27.3511 23.9002 30.2241 23.9137 30.3637ZM17.0123 26.6569C17.7974 27.3951 18.6835 28.0459 19.7292 28.5691C20.2704 26.5827 20.6305 24.537 22.4933 22.5558C25.593 19.2593 29.6867 20.7499 31.8609 22.7943C33.2474 24.0979 35.9764 27.4997 32.4166 31.2856C30.4198 33.4094 28.0768 33.8821 26.0226 34.4926C26.237 34.9351 26.5151 35.2878 26.8298 35.5836C27.1797 35.9127 27.5729 36.1693 27.9728 36.3977C45.5619 46.4474 49.5757 32.3 52.6771 35.2161C53.1391 35.6505 53.9842 36.5631 51.933 38.7447C43.1064 48.132 28.4732 42.7412 23.7969 38.3442C21.5858 36.2652 21.332 34.6743 20.4827 33.8757C19.6239 33.0683 17.256 32.4161 14.0731 29.4233C5.89394 21.7328 5.95204 9.86086 8.01816 7.66348C8.75782 6.87682 10.195 6.5398 11.0537 7.34725C12.9038 9.08683 7.51399 17.726 17.0123 26.6569Z" fill="#000000"></path></svg>
            <img className="consimg"  alt=""  src="./assets/cons.jpg"></img>
          
            <div className="proschecklist">
            
              <h5 className="checklisttitle">Before SuperOps.ai</h5>
              
              <ul className="checklist">
                  <div className="listitem"><img className="listconsimg" alt="" src="./assets/listcons.svg"></img> <li className="checklisttext">Legacy tools</li></div>
                  <div className="listitem"> <img className="listconsimg" alt="" src="./assets/listcons.svg"></img> <li className="checklisttext">Hidden costs</li></div>
                  <div className="listitem"> <img className="listconsimg" alt="" src="./assets/listcons.svg"></img> <li className="checklisttext">Siloed process</li></div>
                  <span className="emoji">😡</span> <p className="status">Everyone's frustrated</p>
              </ul>
            </div>
           
          </div>
         
          <div className="prosconsmain">
         
          <svg width="57" height="11" viewBox="0 0 67 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="position-absolute horizontal-wire"><path fillRule="evenodd" clipRule="evenodd" d="M58.5696 8.07259C58.5373 8.07259 58.505 8.07259 58.4737 8.07259C52.2675 7.568 51.819 4.79106 47.9348 4.79106C43.4021 4.79106 40.2703 9.32713 35.0282 9.32713C29.1772 9.32713 27.0077 4.29252 23.2194 4.29252C17.3495 4.29252 13.92 10.3804 7.48958 10.3804C3.85017 10.3804 1.89493e-07 8.16762 4.83389e-07 4.73576C6.52091e-07 2.7658 1.78204 2.5498 2.12553 2.5498C4.53447 2.5498 4.03762 6.10349 7.25551 6.10349C12.364 6.10349 15.5173 9.17265e-05 23.3136 9.24223e-05C29.0812 9.2937e-05 31.2086 5.05976 34.987 5.05976C38.0237 5.05977 42.9931 0.413957 47.9805 0.413958C52.6199 0.413958 55.6064 4.03245 59.5804 4.03245C63.009 4.03245 62.6835 0.302501 64.8798 0.302501C66.4126 0.302502 67 1.74022 67 2.3986C67 3.86052 64.6234 8.07259 58.5696 8.07259Z" fill="#000000"></path></svg>
            <div className="conschecklist">
              <h5 className="checklisttitle">After SuperOps.ai</h5>
              <ul className="checklist">
                  <div className="listitem"><img className="listconsimg" alt="" src="./assets/listpros.svg"></img> <li className="checklisttext"> Modern platform</li></div>
                  <div className="listitem"> <img className="listconsimg" alt="" src="./assets/listpros.svg"></img> <li className="checklisttext">More revenue</li></div>
                  <div className="listitem"> <img className="listconsimg"alt="" src="./assets/listpros.svg"></img> <li className="checklisttext">Unified PSA-RMM</li></div>
                  <span className="emoji">😁</span> 
                  <p className="status">Everyone's happy</p>
              </ul>
             
              </div>
              
            <img src="./assets/pros.jpg" alt="pros"  className="consimg"></img>
          </div>
        </div>


        <div className="videodiv">
          <div className="question">
          Still using bloated and outdated software? Say no more
          </div>
          <div className="video">
            <div className="videoimagediv" onClick={isToggleModal}>
                <div className="playbg">
                <img alt="play" className="play" src="./assets/play.svg"></img>
              </div>

              <img className="videoimg" alt="video" src="./assets/video.jpg"></img>
            </div>
          </div>
          </div>
          <div className="fourthsection">
            <div className="fourthsecwrap">
              <div className="textsecone">
                <div className="greenring"></div>
                <div className="yellowring"></div>
                <div className="pinkring"></div>
                <div  className="bluering"></div>
                <div className="sectext">
                We’re serious about providing new-age solutions for new-age problems
                </div>
                <div className="getstartedbtndiv textseconebtn">
                  <button className="getstartedbtn" type="button">GET STARTED FOR FREE <img  className="arrow" alt="img" src="./assets/arrow.svg"></img></button>
                </div>
              </div>
            </div>

              <div className="experiencediv" id="experiencediv">
                <div className="headline exphead">What you've been missing out on, until SuperOps.ai</div>
                <div className="expbtndiv">
                <div  id="intbtn" className="expbtnclick expbtns"><div className="dot dotclick"  id="intdot"> </div>INTELLIGENT</div>
                <div  id="unibtn" className="expbtns"><div className="dot" id="unidot"></div>UNIFIED</div>
                <div id="modbtn" className="expbtns"><div className="dot" id="moddot"></div>MODERN</div>
                </div>
                      
                <div className="iddiv">{setInterval(()=>{
                  if(i==0){
                  getIntelligent();
                } 
                else if(i==1){
                  getUnified();
                }  
                else if(i==2){
                  getModern();
                }     
                i+=1;
                if(i==3){
                  i=0;
                }
              }, 3000)}
              </div>
              
                <div id="bulkofcards">
                    <Card id="intelligent" className="intelligent expcard">
                      <CardBody className="cardbody">
                        <div className="cardcontent">
                        <img src="./assets/intelligentexp.jpg"className="person" alt="person"></img>
                        <h4 className="cardtitle"> <p className="intelitext">INTELLIGENT</p> Hard work feels like hardly working, thanks to intelligent automation</h4>
                        <CardText className="cardpara">
                        SuperOps.ai is powered with intelligent IT automation and engineered for speed so you can get work done without moving a muscle.
                        </CardText>
                        </div>
                      
                      </CardBody>
                    </Card>
                    <Card id="unified" className="unified expcard">
                      <CardBody className="cardbody">
                      <div className="cardcontent">
                      <img src="./assets/unifiedexp.jpg" className="person" alt="person"></img>
                      
                        <h4 className="cardtitle"><p className="intelitext">UNIFIED</p> Unified from the ground up, not just another makeshift arrangement</h4>
                        <CardText className="cardpara">
                        We bring together PSA and RMM so you can manage tasks, teams, clients, assets, finance, time, resources, and everything in between, from one place.
                        </CardText>
                        </div>
                      
                      </CardBody>
                    </Card>
                    <Card id="modern"className="modern expcard">
                      <CardBody className="cardbody">
                      <div className="cardcontent">
                      <img src="./assets/modernexp.jpg"  className="person" alt="person"></img>
                    
                        <h4 className="cardtitle"> <p className="intelitext">MODERN</p> Experience the future of IT service delivery</h4>
                        <CardText className="cardpara">
                        Because of its human-centered design, everything in SuperOps.ai looks better, feels better — you wish you had more stuff to do just to hang out on our platform.
                        </CardText>
                        </div>
                        
                      </CardBody>
                    </Card>
                </div>
                <Card id="intelligentres" className="intelligent expcard">
                  <CardBody className="cardbody">
                    <div className="cardcontent">
                      
                    <img src="./assets/intelligentexp.jpg"className="person" alt="person"></img>
                    
                   
                  
                    <h4 className="cardtitle"> <p className="intelitext">INTELLIGENT</p> Hard work feels like hardly working, thanks to intelligent automation</h4>
                    <CardText className="cardpara">
                    SuperOps.ai is powered with intelligent IT automation and engineered for speed so you can get work done without moving a muscle.
                    </CardText>
                    </div>
                   
                  </CardBody>
                </Card>
                <Card id="unifiedres" className="unified expcard">
                  <CardBody className="cardbody">
                  <div className="cardcontent">
                  <img src="./assets/unifiedexp.jpg" className="person" alt="person"></img>
                  
                    <h4 className="cardtitle"><p className="intelitext">UNIFIED</p> Unified from the ground up, not just another makeshift arrangement</h4>
                    <CardText className="cardpara">
                    We bring together PSA and RMM so you can manage tasks, teams, clients, assets, finance, time, resources, and everything in between, from one place.
                    </CardText>
                    </div>
                   
                  </CardBody>
                </Card>
                <Card id="modernres"className="modern expcard">
                  <CardBody className="cardbody">
                  <div className="cardcontent">
                  <img src="./assets/modernexp.jpg"  className="person" alt="person"></img>
                 
                    <h4 className="cardtitle"> <p className="intelitext">MODERN</p> Experience the future of IT service delivery</h4>
                    <CardText className="cardpara">
                    Because of its human-centered design, everything in SuperOps.ai looks better, feels better — you wish you had more stuff to do just to hang out on our platform.
                    </CardText>
                    </div>
                    
                  </CardBody>
                </Card>
                
              </div>
          </div>


          <div className="tools">
            <div className="toolstext">We play nice with other tools</div>
              <div className="toolsinnerwrap">
              <Card className="companycard">
                  <CardBody className="compcardbody">
                  <div className="industry">
                    remote access
                  </div>
                  <div className="companylogo">
                        <img className="companyimg"src="./assets/teamviewer.jpg" alt="Team Viewer"/>
                    </div>
                    <div className="integrate">
                   integrate
                  </div>
                  </CardBody>
                </Card>

                <Card className="companycard">
                  <CardBody className="compcardbody">
                  <div className="industry">
                    remote access
                  </div>
                  <div className="companylogo">
                        <img className="companyimg" src="./assets/splashtop.jpg" alt="Team Viewer"/>
                    </div>
                    <div className="integrate">
                   integrate
                  </div>
                  </CardBody>
                </Card>

                <Card className="companycard">
                  <CardBody className="compcardbody">
                  <div className="industry">
                   invoicing
                  </div>
                  <div className="companylogo">
                        <img className="companyimg" src="./assets/quickbooks.jpg" alt="Team Viewer"/>
                    </div>
                    <div className="integrate">
                   integrate
                  </div>
                  </CardBody>
                </Card>

                <Card className="companycard">
                  <CardBody className="compcardbody">
                  <div className="industry">
                    remote access
                  </div>
                  <div className="companylogo">
                        <img  className="companyimg"src="./assets/connectwise.jpg" alt="Team Viewer"/>
                    </div>
                    <div className="integrate">
                   integrate
                  </div>
                  </CardBody>
                </Card>

                <Card className="companycard">
                  <CardBody className="compcardbody">
                  <div className="industry">
                    coming soon
                  </div>
                  <div className="companylogo">
                        <img  className="companyimg"src="./assets/xero.jpg" alt="Team Viewer"/>
                    </div>
                    <div className="integrate">
                   integrate
                  </div>
                  </CardBody>
                </Card>
              
            </div>
          </div>
    
          <div className="doitall">
            <div className="headtextdoitall">Do it all with SuperOps.ai</div>
            <div className="paratextdia">A single platform for ITOps, AIOps, RevOps, and ComplianceOps</div>
            <div className="cardopswrap">
            <div className="cardsofops">
              <Card id="ITOps" className="opscarddiv">
                <CardBody className="bodyops">
                  <div className="imgdesc">
                      <img src="./assets/itops.svg" className="opsimg" alt="ITOPS">

                      </img>
                      <div className="contentwrapops">
                        <div className="deschead">
                        ITOps
                        </div>
                        <div className="descdiv">
                            Deliver world-class IT services to businesses of all sizes      
                        </div>
                      </div>
                  </div>
                  <div className="links">
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/servicedesk-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">Service Desk</div>
                            <div className="cardlinkp">
                            Prioritize, assign, and resolve tickets, incidents, and service requests faster
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/assetmanagement-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">Asset Management</div>
                            <div className="cardlinkp">
                            Automate, manage, and keep a track of your assets' health remotely
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/project-management-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">Project Management</div>
                            <div className="cardlinkp">
                            Set milestones, assign tasks, and track progress on projects for each client
                            </div>
                          </div>
                        </div>
                  </div>
                </CardBody >
              </Card>
              <Card id="AIOps" className="opscarddiv">
                <CardBody className="bodyops">
                  <div className="imgdesc">
                      <img src="./assets/aiops.svg"   className="opsimg" alt="AIOps">

                      </img>
                      <div className="contentwrapops">
                      <div className="deschead">
                      AIOps
                      </div>
                      <div className="descdiv">
                      Intelligent automation and AI to run your business on autopilot    
                      </div>
                      </div>
                    </div>
                    <div className="links">
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/runbook-icon.svg" className="iconlink" alt="Runbooks"></img>
                            <div className="heading">Runbooks</div>
                            <div className="cardlinkp">
                            Document, streamline, and automate your business processes
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/intilligent-alerts-icon.svg" className="iconlink" alt="Intilligent alerting"></img>
                            <div className="heading"> Intilligent alerting</div>
                            <div className="cardlinkp">
                            Get notified when a device fails, reaches a threshold, or something goes wrong 
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/intilligent-ticket-icon.svg" className="iconlink" alt="img"></img>
                            <div className="heading">Intilligent ticket routing</div>
                            <div className="cardlinkp">
                            Automatically route tickets to the right technician or team and resolve tickets faster
                          </div>
                        </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/intilligent-invoice-icon.svg" className="iconlink" alt="img"></img>
                            <div className="heading">Intilligent invoicing</div>
                            <div className="cardlinkp">
                            Get paid on time by automating your billing process and sending accurate invoices
                            </div>
                          </div>
                        </div>
                  </div>
                  </CardBody>
              </Card>
              <Card id="ComplianceOps" className="opscarddiv">
                <CardBody className="bodyops">
                    <div className="imgdesc">
                      <img src="./assets/complianceops.svg"  className="opsimg"  alt="ComplainceOps">

                      </img>
                      <div className="contentwrapops">
                      <div className="deschead">
                      ComplianceOps
                      </div>
                      <div className="descdiv">
                      Everything you need to make sure your clients are compliant
                      </div>
                      </div>
                    </div>
                    <div className="links">
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/policy-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">Policy Management</div>
                            <div className="cardlinkp">
                            Create custom policies to automatically monitor assets, requests, and incidents
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/patch-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">Patch Management</div>
                            <div className="cardlinkp">
                            Keep all devices safe from vulnerabilities by proactively deploying patches
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/sla-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">SLA management</div>
                            <div className="cardlinkp">
                            Easily store and access SLA information on all contracted services
                            </div>
                          </div>
                        </div>
                  </div>
                  </CardBody>
              </Card>
              <Card id="RevOps" className="opscarddiv">
              <CardBody className="bodyops">
                  <div className="imgdesc">
                      <img src="./assets/revops.svg"  className="opsimg" alt="RevOps">

                      </img>
                      <div className="contentwrapops">
                      <div className="deschead">
                      RevOps
                      </div>
                      <div className="descdiv">
                      Build revenue, business operations, and client relationships
                      </div>
                      </div>
                    </div>
                    <div className="links">
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/contract-mangement-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading"> Contract management</div>
                            <div className="cardlinkp">
                            Create, send, and manage all contracts for new and existing clients from one place
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/prospect-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">Client management</div>
                            <div className="cardlinkp">
                            Build and manage strong customer relationships through effective communication
                            </div>
                          </div>
                        </div>
                        <div className="cardlink">
                          <div className="cardlinkhead">
                            <img src="./assets/aiops-icon.svg" className="iconlink" alt="Service Desk"></img>
                            <div className="heading">IT documentation</div>
                            <div className="cardlinkp">
                            Keep a record of all device, vendor, password information in one place for easy access
                            </div>
                          </div>
                        </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
            <div className="viewall">
              <button type="button" className="viewallbtn">VIEW ALL FEATURES <img  className="arrow" alt="img" src="./assets/arrow.svg"></img></button>
            </div>
          </div>

        <div className="customertestimonalwrap">
            <div className="customertestimonal" id="custtext">
              <div className="customerwrap">
              <div className="customerhead">Hear it from our customers</div>
              <div className="iddiv">
              {setInterval((changeCustomer) => {
                  
                  if(j==0){
                  getGeeshan();
                  } 
                  else if(j==1){
                    getRon();
                  }  
                  else if(j==2){
                    getRobbie();
                  }     
                  j=j+1;
                  if(j==3){
                    j=0;
                  }
                  
                }, 3000)

              }
              </div>
              <div className="customerfeedback" id="customerfeedback">
                <Card className="feedbackcard" id="fb1">
                <img src="./assets/pink quote.png"className="quote" alt="quote"></img>
                  <CardBody className="feedbackcardbody">
                  We don't use our current built-in Project Management tool due to its non-user-friendly nature. SuperOps.ai's project management tool overcomes the complexity of traditional project management tools.
                  <div className="custname">
                   <span className="name">Geeshan Subashinga</span> 
                   <span className="compname">NetFusion Designs Inc.</span> 
                  </div>
                  </CardBody>
                </Card>
                <Card className="feedbackcard" id="fb2">
                  <img src="./assets/pink quote.png" className="quote" alt="quote"></img>
                  <CardBody className="feedbackcardbody">
                  I'm not kidding you when I say I've tried every PSA, RMM software out there. But seeing your product makes me so happy. I can't wait for you folks to release it. Fantastic.
                  <div className="custname">
                   <span className="name"> Ron. A</span> 
                   <span className="compname">TechTap Solutions</span> 
                  </div>
                  </CardBody>
                </Card>
                <Card className="feedbackcard" id="fb3">
                <img src="./assets/pink quote.png"  className="quote"alt="quote"></img>
                  <CardBody className="feedbackcardbody">
                 
                  I think the platform is really nice. Everything flows nicely and looks neat. The design and usability of the product are really good.
                  <div className="custname">
                   <span className="name">Robbie Emerson</span> 
                   <span className="compname">Osiris Technologies</span> 
                  </div>
                  </CardBody>
                </Card>
                </div>
                <div className="customerprofile">
                  <div className="profilewrap" id="fbp1" > <img src="./assets/geeshan.jpg"   alt="geeshan"className="profile"></img></div>
                  <div className="profilewrap" id="fbp2"><img src="./assets/ron.jpg" alt="ron" className="profile"></img></div>
                  <div className="profilewrap" id="fbp3"> <img src="./assets/robbie.jpg"  alt="robbie" className="profile"></img></div>
                </div>
              
              </div>
              
              </div>
              <div className="alltogetherwrap">
                <div className="alltogether">
                 <img src="./assets/circle-purple.svg"  alt="img" className="circpurp"/>
                 <img src="./assets/dev-yellow.svg"  alt="img" className="devyellow"/>
                <img src="./assets/blue2ring.svg" className="bluetworing" alt="img"></img>
                  <img src="./assets/green2ring.svg" className="greentworing" alt="img"></img>
                  <img src="./assets/pink2ring.svg" className="pinktworing" alt="img"></img>
                  <img src="./assets/yellow2ring.svg" className="yellowtworing" alt="img"></img>
                  <img src="./assets/blue2res.svg" className="bluetwores" alt="img"></img> 
                  <img src="./assets/document-green.svg"  alt="img" className="docgreen"/>
                  <img src="./assets/green2res.svg" className="greentwores" alt="img"></img>
                  <img src="./assets/pink2res.svg" className="pinktwores" alt="img"></img>
                  <img src="./assets/spark-purple.svg" alt="img" className="sparkpurp"/>
                  <img src="./assets/yellow2res.svg" className="yellowtwores" alt="img"></img>
                  <h4 className="alltoghead">
                    All your favourite tools together now
                  </h4>
                  <p className="alltogtext">
                  Tickets, assets, clients, projects, IT documentation — manage it all with SuperOps.ai
                  </p>
                  <div className="getstartedbtndiv">
                    <button className="getstartedbtn" type="button">GET STARTED FOR FREE <img  className="arrow" alt="img" src="./assets/arrow.svg"></img></button>
                  </div>
                </div>
            </div>
        </div>

        
        <div className="stayinknowwrap">
          <div className="stayinknowdiv">
            <div className="siktextdiv">
                Stay in the know!
                <span className="siklinktext">
                  explore library <img className="readmore" alt="img" src="./assets/blackarrow.svg"></img>
                </span>
            </div>
            <Card className="sikcard">
            <CardImg top width="100%" className="sikimg"  src="./assets/psa.jpg" alt="psa"></CardImg>
            <span className="siktitle">psa</span>
            <CardBody className="textcardsik">
              
            How to step up and shine as a service desk manager
            <span className="siklinktext">
            read more <img className="readmore" alt="img" src="./assets/blackarrow.svg"></img>
            </span>
            </CardBody>
           
            </Card>
            <Card className="sikcard">
            <CardImg top width="100%" src="./assets/cybmsp.jpg" alt="cybmsp" className="sikimg"></CardImg>
            <span className="siktitle">cybersecurity <span className="divider">|</span> msp</span>
            <CardBody className="textcardsik">
            
            Mistakes to avoid when creating backups
            <span className="siklinktext">
            read more <img className="readmore"  alt="img" src="./assets/blackarrow.svg"></img>
            </span>
            </CardBody>
            
            </Card>
            <Card className="sikcard">
            <CardImg top width="100%"  className="sikimg"  src="./assets/msp.jpg" alt="msp"></CardImg>
            <span className="siktitle">msp</span>
            <CardBody className="textcardsik">
            5 reasons your company needs to implement PSA
            <span className="siklinktext">
                  read more <img className="readmore" alt="img" src="./assets/blackarrow.svg"></img>
            </span>
            </CardBody>
            </Card>
          </div>
        </div>

      </div>
    )
  }
}
export default App;