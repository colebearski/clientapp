import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    // hard code some data
    // static array
    // but will come from firebase
    const clients = [
      {
        id: "123",
        firstName: "Greg",
        lastName: "Jones",
        email: "gregjones@gmail.com",
        phone: "333-333-3333",
        balance: "70"
      },
      {
        id: "456",
        firstName: "Bob",
        lastName: "Williams",
        email: "bwill@gmail.com",
        phone: "444-444-4444",
        balance: "125"
      }
    ];

    // if there are clients load them here
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {/* loop thru our clients and output a table row */}
              {/* clients, lets map thru them and for each one call it client */}
              {/* set an arrow function, for each one we want to return a trow */}
              {/* they all need a key and we want a column for each piece of data */}
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  {/* details button will incorporate a Link  */}
                  <td>
                    <Link
                      to={`/client${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      // if we're still loading clients display
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
