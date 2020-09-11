import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show!==this.props.show || nextProps.children!==this.props.children; // Alreayd went through in previous chapter.. this is one of the class compoent life cycle method. If this method return true then only allow
                                                                                            // the component to re-render. As the Modal will pop-up/closed only when show property is changed so Modal and it's child Order summary (see BurgerBuolder.js)
                                                                                             // will render only whe show property will change meand when OrderNow button click. This way we can avoid unnessesary re-rendring in behind of scene of components in which
                                                                                            // due to change in some other components. This improves the performance of react.
    }
    componentWillUpdate() {
        console.log('[Modal will update method]');  // don;lt forget to put semi colon as you will not get any comiple issue but the method will not work
        // So the message in chrome developer tool (press F12 in chorme) now will appear only when Modal is about to show or closed and not on any change in any other component.
        // If we will remove the shouldComponentUpdate the mesage will come on evry state change as state change cause re-rendring of component and all child compnonents.
    }
    render () {
        return  ( // ensure this brace ('(' ) is in the same line as return else it will throw an error.... funny though :)
                <Aux>
                    <Backdrop 
                    show={this.props.show}
                    clicked={this.props.modelClosed}
                    ></Backdrop>
                    <div className={classes.Modal}
                        style={{
                                transform:this.props.show ?'translateY(0)':'translateY(-100vh)',
                                opacity:this.props.show ? '1':'0'
                        }}>
                        {this.props.children}
                    </div>
                </Aux>
        )
    }
}
    
export default Modal;