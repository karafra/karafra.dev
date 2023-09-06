import React from 'react';
import {AppBar as MaterialAppBar, Tooltip,} from '@material-ui/core';
import {Link} from "react-router-dom";

import SourceCodeIcon from '../../../assets/icons/sourcecode.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import SpotifyIcon from '../../../assets/icons/spotify.svg';

import useStyles from './style';

function AppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <MaterialAppBar
                color="transparent"
                position="fixed">
                <div className={classes.toolBar}>
                    <Link
                        className={classes.title}
                        to="/">
                        Karafra
                    </Link>

                    <div className={classes.iconWrapper}>
                        <Tooltip title="Website Source Code">
              <span>
                <a
                    href="https://github.com/karafra/karafra.dev"
                    target="_blank"
                    rel="noreferrer">
                  <img
                      className={classes.icon}
                      src={SourceCodeIcon}
                      alt="karafra/karafra.dev"/>
                </a>
              </span>
                        </Tooltip>

                        <Tooltip title="Github">
              <span>
                <a
                    href="https://github.com/karafra"
                    target="_blank"
                    rel="noreferrer">
                  <img
                      className={classes.icon}
                      src={GithubIcon}
                      alt="karafra"/>
                </a>
              </span>
                        </Tooltip>

                        <Tooltip
                            className={classes.spotifyLink}
                            title="Spotify">
              <span>
                <a
                    href="https://open.spotify.com/user/216lxazexqtqgw4utce3jqqqq?si=01168563e6014b42"
                    target="_blank"
                    rel="noreferrer">
                  <img
                      className={classes.icon}
                      src={SpotifyIcon}
                      alt="spotify:user:12146574234"/>
                </a>
              </span>
                        </Tooltip>
                    </div>
                </div>
            </MaterialAppBar>
        </React.Fragment>
    )
}

export default AppBar;
