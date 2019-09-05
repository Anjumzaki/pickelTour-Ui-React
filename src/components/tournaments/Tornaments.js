import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import './Touranment.css'
import { Table } from 'reactstrap';

const Tournament = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="searchBar">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="seText">Tournaments</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                            <span className="seeAll"> See All </span>
                        </InputGroup>
                    </div>
                    <div className="myCuCard">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>

                    <div className="myCuCard myCuCard2">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>

                    <div className="myCuCard myCuCard2">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>
                    <div className="searchBar">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="seText">Players</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                            <span className="seeAll"> See All </span>
                        </InputGroup>
                    </div>
                    <div className="myCuCard myCuCard2 playerCard">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>
                    <div className="myCuCard myCuCard2 playerCard">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>
                    <div className="myCuCard myCuCard2 playerCard">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>
                    <div className="myCuCard myCuCard2 playerCard">
                        <span className="toBa"> Featured </span>
                        <div className="cardBody">
                            <h3>Grand Tournament</h3>
                            <h6> Middle East, Spain </h6>
                            <p>January 25, 2020</p>
                            <span className="text-muted">Click here to Register</span>
                        </div>
                    </div>
                    
                </div>

                <div className="col-12 col-md-4">
                    <div className="myCuCard3">
                        <Table hover>
                            <tbody>
                                <tr>
                                    <th colSpan={5} scope="row">Recent Results</th>
                                    <td>All Results</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>
                                <tr>
                                    <th scope="row">1/12</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td><img className="teamReL" src={require('../../assets/team3.png')}></img></td>
                                    <td>ASB</td>
                                    <th>12-14</th>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className="myCuCard3">
                        <Table hover>
                            <tbody>
                                <tr>
                                    <th colSpan={4} scope="row">Top Rankings</th>
                                    <td>All Results</td>
                                </tr>
                                <tr>
                                    <th scope="row">SL.</th>
                                    <th colSpan={2}> Team </th>
                                    <th>PTS</th>
                                    <th>P</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team3.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team1.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team3.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team1.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="myCuCard3">
                        <Table hover>
                            <tbody>
                                <tr>
                                    <th colSpan={4} scope="row">Top Scorers</th>
                                    <td>All Results</td>
                                </tr>
                                <tr>
                                    <th scope="row">Score</th>
                                    <th colSpan={2}> Name </th>
                                    <th>PTS</th>
                                    <th>Rank</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team3.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team1.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team2.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team3.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img className="teamReL" src={require('../../assets/team1.png')}></img> </td>
                                    <td>MDV</td>
                                    <td>12</td>
                                    <th>1</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="myCuCard3 adver">
                       Advertisment
                    </div>
                    <div className="myCuCard3 ">
                    <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="seText">Subscribe</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder='Email'/>
                        </InputGroup>
                        
                    </div>
                    <p style={{paddingTop:'10%'}} className='text-muted'>Get Daily Updates and News Letter</p>
                </div>

            </div>
        </div >
    );
};

export default Tournament;