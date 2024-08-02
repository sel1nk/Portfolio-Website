import { Col } from "react-bootstrap";

export const ProjectCard = ({title, technologies, imgUrl}) => {
    return(
       
        <Col className="proj-card-span" sm ={4} md={2}>
            <div className = "proj-imgbx">
                <img src={imgUrl} />
                <div className = "proj-txtx">
                    <h4>{title}</h4>
                    <span>{technologies}</span>
                </div>
            </div>
        </Col>
      
    )
}
// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, technologies, imgUrl }) => {
//     return (
//         <div className="proj-imgbx">
//             <img src={imgUrl} alt={title} />
//             <div className="proj-txtx">
//                 <h4>{title}</h4>
//                 <span>{technologies}</span>
//             </div>
//         </div>
//     );
// };
