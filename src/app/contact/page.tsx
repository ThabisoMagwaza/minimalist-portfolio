'use client';
import * as React from 'react';
import Link from 'next/link';

import { Properties } from '@/constants/Properties';
import { COLORS } from '@/constants/Colors';
import { QUERIES } from '@/constants/Queries';

import Heading2 from '@/components/Heading2';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import styled from 'styled-components';
import Github from '@/components/Github';
import Twitter from '@/components/Twitter';
import LinkedIn from '@/components/LinkedIn';
import PrimaryButton from '@/components/PrimaryButton';

export default function Page() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    alert(JSON.stringify({ name, email, message }));

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main>
      <Wrapper>
        <GetInTouchSection>
          <Heading2>Get in Touch</Heading2>

          <div>
            <Paragraph>
              I&apos;d love to hear about what you&apos;re working on and how I
              could help. I&apos;m currently looking for a new role and am open
              to a wide range of opportunities. My preference would be to find a
              position in a company in London. But I&apos;m also happy to hear
              about opportunites that don&apos;t fit that description. I&apos;m
              a hard-working and positive person who will always approach each
              task with a sense of purpose and attention to detail. Please do
              feel free to check out my online profiles below and get in touch
              using the form.
            </Paragraph>

            <SocialLinks>
              <ListItem>
                <SocialLink href="/">
                  <Github />
                </SocialLink>
              </ListItem>
              <ListItem>
                <SocialLink href="/">
                  <Twitter />
                </SocialLink>
              </ListItem>
              <ListItem>
                <SocialLink href="/">
                  <LinkedIn />
                </SocialLink>
              </ListItem>
            </SocialLinks>
          </div>
        </GetInTouchSection>

        <ContactSection>
          <Heading2>Contact Me</Heading2>

          <ContactForm onSubmit={submitForm}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>

              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Appleseed"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>

              <Input
                id="email"
                required
                placeholder="email@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>

              <TextArea
                as="textarea"
                id="message"
                required
                placeholder="How can I help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>

            <PrimaryButton>Send Message</PrimaryButton>
          </ContactForm>
        </ContactSection>
      </Wrapper>
    </main>
  );
}

const Paragraph = styled.p`
  margin-bottom: 24px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 635px;
  }
`;

const Wrapper = styled(MaxWidthWrapper)`
  @media ${QUERIES.tabletAndUp} {
    margin-top: 94px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 635px;
    flex: 1;
  }
`;

const Input = styled.input`
  height: ${48 / 16}rem;
  border: none;
  background: hsl(245deg, 10%, 22%, 0.1);

  font-size: 1rem;
  line-height: 2.3;
  color: ${COLORS.Primary22};

  padding: 9px 16px;

  &::placeholder {
    color: hsl(245deg, 10%, 22%, 0.4);
    font-size: inherit;
    line-height: inherit;
  }
`;

const TextArea = styled(Input)`
  height: 96px;
`;

const Label = styled.label`
  line-height: 2.3;
  font-size: ${13 / 16}rem;
  font-weight: 700;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactSection = styled.section`
  padding-top: 32px;
  padding-bottom: 80px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: 96px;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 106px;
  }
`;

const GetInTouchSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-top: 24px;
  padding-bottom: 32px;

  border-top: ${Properties.BorderLight};
  border-bottom: ${Properties.BorderLight};

  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ListItem = styled.li``;
