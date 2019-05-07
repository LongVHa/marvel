import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <div className="footer mt-2">
                <div className="content text-right font-weight-bold">
                    copyright {this.props.copyright}
                </div>
            </div>
        )
    }
}

export default Footer;