import React from 'react';


class Cars extends React.Component {
constructor(props){

    super(props);

        }


    render(){

    let mas = [];


    let {carlist} = this.props;

        for(let i=0;i<carlist.length;i++)
        {

            mas[i] = <tr><td>{carlist[i].name}</td><td>{carlist[i].model}</td> <td>{carlist[i].country}</td> <td>{carlist[i].speed}</td>
                <td className="table_car_image">< img
                    src = {

                        carlist[i].src
                    }
                    alt = {carlist[i].name} /></td>
                </tr>
        }

    return(
        <div className="autoclass">
            <h2 >Vehicles</h2>
            <table className='table_car'><tr><td>Unit</td><td>Model</td><td>Country</td><td>Max.Speed</td></tr>
                    {mas}
            </table>


             </div>
    )

    }
}


export default Cars;
