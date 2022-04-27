import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ClasseMemeSvgViewer.module.scss'
const ClasseMemeSvgViewerInitialState={};

class ClasseMemeSvgViewer extends Component {
    constructor(props){
        super(props);
        this.state = ClasseMemeSvgViewerInitialState;
    }
    render() {
        return (
            <div className={style.ClasseMemeSvgViewer} data-testid='ClasseMemeSvgViewer'>
                classeMemeSvgViewer
            </div>
        );
    }
}

ClasseMemeSvgViewer.propTypes = {

};

ClasseMemeSvgViewer.defaultProps= {

};

export default ClasseMemeSvgViewer;