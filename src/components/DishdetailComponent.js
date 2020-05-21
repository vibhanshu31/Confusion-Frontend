import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
    
    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    function RenderComments({comments}) {
        if (comments != null) {
            const comment = comments.map((C) => {
                return(
                    <ul className="list-unstyled" key={C.id}>
                        <li>
                            {C.comment}
                            <br/><br/>
                            --{C.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(C.date)))}
                            <br/>
                        </li>
                    </ul>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    {comment}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }


    const DishDetail = (props) => {
        if (props.dish != null)
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );
        else
            return (
                <div></div>
            );

    }


export default DishDetail;