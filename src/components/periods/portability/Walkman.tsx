'use client'

import { useState } from 'react';
import ReactHowler from 'react-howler';

import './Walkman.css';

const Walkman = () => {
    const song = "/sounds/walkman/song_1.mp3";

    // Walkman state
    const [walkmanState, setWalkmanState] = useState<'playing' | 'stopped' | 'ff' | 'rewind' | 'ejecting' | 'ejected'>('stopped');

    // state helpers
    const isPlaying = walkmanState === 'playing';
    const isStopped = walkmanState === 'stopped';
    const isFastForwarding = walkmanState === 'ff';
    const isRewinding = walkmanState === 'rewind';
    const isEjecting = walkmanState === 'ejecting';
    const isEjected = walkmanState === 'ejected';

    // camera
    const [rotationY, setRotationY] = useState<number>(-50);
    const [rotationX, setRotationX] = useState<number>(0);
    const [rotationZ, setRotationZ] = useState<number>(0);

    // UI state
    const [ejectButtonPressed, setEjectButtonPressed] = useState<boolean>(true);

    // UI logic


    const onPlayButtonClick = () => {
    }

    return (
        <div className="walkman-wrapper">
            <ReactHowler
                src={`/sounds/tape_deck.mp3`}
                playing={isPlaying || isFastForwarding || isRewinding}
            />

            <ReactHowler
                src={song}
                playing={isPlaying}
                onEnd={() => setWalkmanState('stopped')}
            />

            <input type={`number`} value={rotationY} onChange={(e) => setRotationY(parseInt(e.target.value))} />
            <div 
                className={`walkman ${isEjecting || isEjected ? 'cover-open' : 'tape-in'} ${isPlaying ? 'playing' : ''} ${isFastForwarding ? 'forward' : ''} ${isRewinding ? 'rewind' : ''}`}
                style={{ '--rotation-y': `${rotationY}deg`, '--rotation-x': `${rotationX}deg`, '--rotation-z': `${rotationZ}deg`} as React.CSSProperties}
            >
                <div className="cube walkman-top">
                    <div className="sides-x"></div>
                    <div className="sides-z"></div>
                    <div className="cube hot-line transition-03">
                        <div className="sides-x"></div>
                        <div className="sides-z"></div>
                    </div>
                    <div className="headphone-inputs">
                        <span><span></span></span>
                        <span><span></span></span>
                    </div>
                    <div className="operation transition-03"></div>
                </div>
                <div className="cube walkman-base">
                    <div className="sides-x"></div>
                    <div className="sides-z"></div>
                    <div className="swing-arm"></div>
                    <div className="base-decals">
                        <p>STEREO</p>
                    </div>
                </div>

                <div className="cube walkman-foot">
                    <div className="sides-x"></div>
                    <div className="sides-z"></div>
                    <div className="foot-decals">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <span className="screws">
                            <span className="screw sc-1"></span>
                            <span className="screw sc-2"></span>
                            <span className="screw sc-3"></span>
                        </span>
                        <div className="tone">
                            <div className="tone-switch">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <span>High<br />Low</span>
                        </div>
                    </div>
                    <span className="hover-helpers transition-05"></span>
                </div>

                <div className="walkman-bay">
                    <div className="guides-heads">
                        <div className="guide"></div>
                        <div className="guide"></div>
                        <div className="guide"></div>
                        <div className="guide"></div>
                    </div>
                    <div className="spooler-plates">
                        <div className="plate"></div>
                        <div className="spooler-plate"></div>
                        <div className="spooler-plate"></div>
                    </div>

                    {[1, 2, 3, 4].map((i) => (
                        <div className={`shape cylinder guide-spool guide${i}`} key={`guide-${i}`}>
                            <div className="face bm">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.0666667)" }}></div>
                            </div>
                            <div className="face tp">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.0666667)" }}></div>
                            </div>
                            <div className="face side s0">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.14902)" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.337255)" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.513726)" }}></div>
                            </div>
                            <div className="face side s3">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.584314)" }}></div>
                            </div>
                            <div className="face side s4">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.45098)" }}></div>
                            </div>
                            <div className="face side s5">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.262745)" }}></div>
                            </div>
                            <div className="face side s6">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.0823529)" }}></div>
                            </div>
                            <div className="face side s7">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.0117647)" }}></div>
                            </div>
                        </div>
                    ))}

                    {[1, 2].map((i) => (
                        <div className={`shape cylinder tape-spool tape-spool-${i}`} key={`tape-spool-${i}`}>
                            <div className="face bm">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.0666667)" }}></div>
                            </div>
                            <div className="face tp">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.0666667)" }}></div>
                                <div className="direction-decal">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="face side s0">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.14902)" }}></div>
                            </div>
                            <div className="face side s1">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.337255)" }}></div>
                            </div>
                            <div className="face side s2">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.513726)" }}></div>
                            </div>
                            <div className="face side s3">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.584314)" }}></div>
                            </div>
                            <div className="face side s4">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.45098)" }}></div>
                            </div>
                            <div className="face side s5">
                                <div className="shader" style={{ backgroundColor: "rgba(255, 255, 255, 0.262745)" }}></div>
                            </div>
                            <div className="face side s6">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.0823529)" }}></div>
                            </div>
                            <div className="face side s7">
                                <div className="shader" style={{ backgroundColor: "rgba(0, 0, 0, 0.0117647)" }}></div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className={`cube transition-05 walkman-cover ${(isEjected || isEjecting) ? '' : 'closed'}`} onMouseDown={() => {
                    if (isEjecting) {
                        setWalkmanState('stopped');
                    } else {
                        setWalkmanState('ejecting');
                    }
                }}>
                    <div className="sides-x">
                        <span></span>
                    </div>
                    <div className="sides-z"></div>
                    <div className="window"></div>
                </div>

                <div className="controls">
                    <div className="cube control-base-1">
                        <div className="sides-x"></div>
                        <div className="sides-z"></div>

                        <div className="play">
                            <div className={`cube play-button transition-03  ${isPlaying ? 'pressed' : ''}`} onMouseDown={() => {
                                setWalkmanState('playing');
                            }}>
                                <div className="sides-x"></div>
                                <div className="sides-z"></div>
                                <div className="face"></div>
                            </div>
                        </div>

                        <div className="rewind">
                            <div className={`cube rewind-button transition-03 ${isRewinding ? 'pressed' : ''}`} onMouseDown={() => {
                                setWalkmanState('rewind');
                            }}>
                                <div className="sides-x"></div>
                                <div className="sides-z"></div>
                                <div className="face"></div>
                            </div>
                        </div>

                        <div className="forward">
                            <div className={`cube forward-button transition-03 ${isFastForwarding ? 'pressed' : ''}`} onMouseDown={() => {
                                setWalkmanState('ff');
                            }}>
                                <div className="sides-x"></div>
                                <div className="sides-z"></div>
                                <div className="face"></div>
                            </div>
                        </div>
                    </div>

                    <div className="cube control-base-2">
                        <div className="sides-x"></div>
                        <div className="sides-z"></div>
                    </div>

                    <div className="cube control-base-3">
                        <div className="sides-x"></div>
                        <div className="sides-z"></div>
                        <div className="mic">
                            <ul>
                                <li></li><li></li><li></li><li></li><li></li>
                                <li></li><li></li><li></li><li></li><li></li>
                                <li></li><li></li><li></li><li></li><li></li>
                                <li></li><li></li><li></li><li></li><li></li>
                                <li></li><li></li><li></li><li></li><li></li>
                            </ul>
                        </div>
                        <div className={`stop-eject`} onMouseDown={() => {
                            setEjectButtonPressed(true);
                            setTimeout(() => {
                                setEjectButtonPressed(false)
                            }, 200);

                            if (walkmanState === 'ejected' || walkmanState === 'ejecting') return;
                            
                            if (walkmanState === 'stopped') {
                                setWalkmanState('ejecting')
                            } else {
                                setWalkmanState('stopped');
                            }
                        }} onMouseUp={() => {
                            
                        }}>
                            <div className={`cube stop-eject-button transition-03 ${ejectButtonPressed ? 'pressed' : ''}`}>
                                <div className="sides-x"></div>
                                <div className="sides-z"></div>
                                <div className="face">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <span>Stop<br />Eject</span>
                        </div>
                        <span className="mini-sony"></span>

                    </div>

                    <div className="cube control-base-4">
                        <div className="sides-x"></div>
                        <div className="sides-z"></div>
                        <div className="decals">
                            <span className="decal-play"></span>
                            <span className="decal-rewind"></span>
                            <span className="decal-forward"></span>
                        </div>
                    </div>
                </div>

                <div className={`tape cube transition-05 ${isEjected ? 'ejected' : ''}`} onMouseDown={() => {
                    if (isEjecting) {
                        setWalkmanState('ejected');
                    } else {
                        setWalkmanState('ejecting');
                    }
                }}>
                    <div className="sides-x"></div>
                    <div className="sides-z"></div>

                    <div className="reel-1">
                        <ul className="reel reel-top">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div className="reel-mid"></div>
                        <ul className="reel reel-bottom">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className="reel-2">
                        <ul className="reel reel-top">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div className="reel-mid"></div>
                        <ul className="reel reel-bottom">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className="tape-bottom">
                        <span className="tape-film"></span>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walkman;