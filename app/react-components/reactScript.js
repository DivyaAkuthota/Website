var Note = React.createClass({
   render: function(){
        return (
            <div className="centerpage">
                   <table>
                       <tr><td> <strong><span className="name"> DIVYA AKUTHOTA </span> </strong></td></tr>
                        <tr className="center-contact-button">
                       <td> <button type="button" className="contact-button">Contact</button>
                       </td>
                       </tr>
                   </table>
           </div>
       );
   }
});

React.render(<Note/>, document.getElementById('container'));