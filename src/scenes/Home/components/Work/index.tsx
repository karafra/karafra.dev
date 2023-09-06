import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import WorkGraphic from '../../../../assets/graphics/Work';
import {SectionProps} from '../../index';

import useStyles from './style';

export default function Work(props: SectionProps) {
    const {ref, inView} = useInView({
        threshold: .2,
    });

    useEffect(() => {
        props.showChange(props.index, inView);
    }, [inView]);

    const classes = useStyles();

    return (
        <div
            id="work-section"
            ref={ref}
            className={classes.root}>
            <div className={classes.wrapper}>
                {inView &&
                    <div className={classes.content}>
                        <h1 className={classes.title}>
                            Work Experience
                        </h1>

                        <Divider/>
                        <h2 className={classes.subTitle}>
                            Currently working for Erste Group
                        </h2>
                    </div>
                }
                <div className={classes.graphicWrapper}>
                    {inView &&
                        <WorkGraphic/>
                    }
                </div>
            </div>
        </div>
    );
}