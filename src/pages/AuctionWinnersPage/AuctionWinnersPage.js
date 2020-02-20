import React, { Component } from "react"

import WinnerTable from "./WinnerTable"
import "./AuctionWinnersPage.css";

export class AuctionWinnersPage extends Component {


    render() {
        return (
            <div >
                <WinnerTable lots={this.props.lots} users = {this.props.users} />
            </div>
        );
    }

}
export default AuctionWinnersPage;