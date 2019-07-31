import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Main extends Component {

    form(chose) {
        if(chose === 'person') {

        } else {
            
        }
    }

    render() {
        return (
            <div class='Main'>
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='person'>
                                person
                            </Input>
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='company'>
                                company
                            </Input>
                        </Label>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}