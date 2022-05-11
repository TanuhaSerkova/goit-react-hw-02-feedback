import React from 'react';
import { Section } from './components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';



export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onBtnClick = feedback => {
        this.setState(prevState => ({
            [feedback]: prevState[feedback] + 1,
        }));
    };

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onBtnClick={this.onBtnClick}
                    />
                </Section>

            </>
        );
    }
};