import React, { Components } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class DishDetail extends React.Component {
    
    renderDish(dish) {
    if (dish != null)
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
    else
        return (
        <div></div>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((C) => {
                return(
                    <ul className="list-unstyled" key={C.id}>
					<li>
						{C.comment}
						<br/><br/>
						--{C.author},{C.date}
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


    render() {
        const selected = this.props.selectedDish
        if (selected != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selected.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );

    }

}

export default DishDetail;