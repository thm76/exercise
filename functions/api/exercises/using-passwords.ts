import { EventContext } from "@cloudflare/workers-types";

const data = {
  glossary_terms: ["PASSWORD-GUIDANCE", "PASSWORD-PROTECTION"],
  stages: [
    {
      text_block: [
        {
          title: "ExercisePage introduction",
          textType: "PARAGRAPH",
          text: [
            "This micro exercise is focused on the use of passwords.  It is a short and sharp session that explores this topic using a combination of interactive activities covering the common use of passwords, how attackers find your passwords, and what you can do to limit the risk of your passwords being discovered.  You will have the opportunity to evaluate yourselves as a group against various competencies and at the end of the exercise you will be provided with a report summarising your evaluation.",
          ],
        },
        {
          title: "Timing",
          textType: "PARAGRAPH",
          text: [
            "Allow around 15 to 30 minutes, you may choose to tailor this to the time you and your participants have available.",
          ],
        },
        {
          title: "Participants",
          textType: "PARAGRAPH",
          text: [
            "You can have as many or as few people involved as you like, and no one taking part in this exercise needs to be a cyber security expert.  We recommend 3-5 people including a nominated facilitator to run the session, use the interface, and keep the conversation on track.  It may help thegroup activity if everybody can see the screen.",
          ],
        },
        {
          link: {
            afterText: ".",
            dryRun: true,
            beforeText:
              "Prior to arranging a session with participants, you may find it helpful to familiarise yourself with the exercise by performing a ",
            title: "dry run",
          },
          title: "Next Steps",
          textType: "LINK",
        },
      ],
      breadcrumb: "ExercisePage preparation",
      first_stage: true,
      next_stage: "1",
      answerable_questions: [
        {
          question_type: "CHECKBOX",
          id: "c1",
          label: "I am ready to start the exercise. *",
        },
      ],
      id: "0",
      title: "",
      last_stage: false,
    },
    {
      progress_bar_title: "Introduction",
      left: {
        title: "What is a Micro ExercisePage?",
        content: [
          "A micro exercise is a short and sharp session that explores various Cyber Security topics. It is designed to be run in 15 to 30 minutes, although you may choose to take longer depending on how your discussion goes or how many participants there are taking part. It is entirely up to you.",
        ],
      },
      first_stage: false,
      next_stage: "2",
      subtitle: [
        {
          title: "",
          textType: "PARAGRAPH",
          text: ["Welcome to the Using Passwords micro exercise."],
        },
      ],
      id: "1",
      right: {
        title: "What is expected of the participants?",
        content: [
          "You're here to think, talk and learn about this topic. You don't need to be a Cyber Security expert; it is not a test. Instead, we aim to enable collaborative discussions that further your knowledge and help you identify areas of improvement.",
          "Your nominated facilitator is here to run the session and keep the conversation on track, in whatever way the group is comfortable with.",
        ],
      },
      title: "Introduction",
      type: "TABLE",
      current_step: "1",
    },
    {
      progress_bar_title: "Context",
      text_block: [
        {
          title: "",
          textType: "HTML",
          text: [
            "The proliferation of password use, and increasingly complex password requirements, places an unrealistic demand on users. Inevitably, users will devise their own coping mechanisms to cope with ‘password overload’. This includes:<br><br><ul><li>using the same password across different systems</li><br><li>using simple and predictable password creation strategies</li><br><li>writing passwords down where they can be easily found</li></ul>Attackers exploit these well-known coping strategies, leaving your staff and organisation vulnerable.<br><br>This micro exercise explores how passwords are managed, how attackers find your passwords and what you can do to limit your risk of becoming a victim.",
          ],
        },
      ],
      first_stage: false,
      next_stage: "3",
      id: "2",
      title: "Context",
      current_step: "2",
    },
    {
      progress_bar_title: "Question",
      first_stage: false,
      next_stage: "4",
      questions: [
        {
          source: "NCSC - Most hacked passwords",
          text: "Which is the most hacked password globally?",
          answer:
            "According to haveibeenpwned*, the password '123456' has been found 23 million times. ‘qwerty’ and ‘password’ were found almost 4 million times and ‘11111111’ almost 400,000 times. \n*haveibeenpwned is a website that collects real world passwords previously exposed in data breaches.",
          choices: [
            {
              correct: false,
              text: "password",
            },
            {
              correct: false,
              text: "1111111",
            },
            {
              correct: true,
              text: "123456",
            },
            {
              correct: false,
              text: "qwerty",
            },
          ],
        },
        {
          source: "NCSC - Most hacked passwords",
          text: "Which is the most hacked fictional character name password globally? ",
          answer:
            "The password ‘superman’ has been seen almost 350,000 times in data breaches. These compromised passwords were obtained from global breaches that are already in the public domain having been sold or shared by hackers. If you see a password that you use in this list you should change it immediately.",
          choices: [
            {
              correct: false,
              text: "pokemon",
            },
            {
              correct: false,
              text: "batman",
            },
            {
              correct: false,
              text: "tigger",
            },
            {
              correct: true,
              text: "superman",
            },
          ],
        },
      ],
      id: "3",
      title: "Question",
      type: "MULTI",
      current_step: "3",
    },
    {
      definitionIntroText:
        "Discuss the risks around the following topics, that attackers might exploit to obtain passwords of work and personal accounts. Reveal the description when ready.",
      progress_bar_title: "Discussion",
      first_stage: false,
      next_stage: "5",
      questions: [
        {
          answer:
            "Attackers are often able to conduct a dictionary or brute force attack against common passwords such as those observed in the quiz. A dictionary attack tries every word in a dictionary or wordlist to guess a password. A brute force attack differs as it uses computational power to enter a huge number of combination of values. ",
          question: "Common or obvious passwords ",
        },
        {
          answer:
            "If an organisation, website or application you use is compromised, an attacker may be able to access user passwords. This can allow an attacker to gain access to any other internet facing system on which you use the same password for authentication. ",
          question: "Password Reuse",
        },
        {
          answer:
            "Keyloggers are a type of malicious software that, once on your system, attempts to log the keystrokes you make — including passwords. Of course, this will compromise any password entered, no matter how complex. The best defence here is keeping your software current and up to date, and not permitting users to install software (including browser extensions) other than those permitted by the organisation.",
          question: "Keylogging",
        },
        {
          answer:
            "Attackers will often utilise phishing attacks to send users to fake login pages. Once the user enters their username and password it is passed to the attacker. Further guidance on attacker techniques can be found on the cyber.gov.au.",
          question: "Phishing attacks",
        },
      ],
      id: "4",
      title: "Discussion",
      type: "DEFINITION",
      current_step: "4",
    },
    {
      progress_bar_title: "Question",
      first_stage: false,
      next_stage: "6",
      questions: [
        {
          source: "NCSC - Most hacked passwords",
          text: "Choose the best password from the list below.",
          answer:
            "A good way to create a strong and memorable password is to use three random words. The addition of uppercase letters, numbers and symbols can also be used to further strengthen passwords. Be creative to make it difficult to guess your password. It is recommended that you never use the following personal details for your password: <ul><li>Family members name</li><li>Pets name</li><li>Place of birth</li><li>Favourite holiday</li><li>Favourite sports team ",
          choices: [
            {
              correct: false,
              text: "Pa55word!",
            },
            {
              correct: false,
              text: "Manutd1977",
            },
            {
              correct: false,
              text: "password1!",
            },
            {
              correct: true,
              text: "3redhousemonkeys27!",
            },
          ],
        },
      ],
      id: "5",
      title: "Question",
      type: "MULTI",
      current_step: "5",
    },
    {
      progress_bar_title: "Scenario",
      first_stage: false,
      next_stage: "7",
      id: "6",
      scenarios: [
        {
          information: [
            {
              type: "TEXT",
              value:
                "You have logged into your laptop and you cannot access your work email account due to an ‘Incorrect password’. You have checked and confirmed that the password you are entering is correct. You have the ability to change your own password. Some colleagues mention that they will respond to your urgent emails as soon as possible.",
            },
          ],
          title: "The scenario",
          type: "QUESTION",
          content: [
            {
              type: "TEXT",
              value:
                "Consider the scenario outlined and run through the remaining points when you are ready",
            },
          ],
          open: true,
        },
        {
          information: [
            {
              type: "LIST",
              values: [
                "Have you ever experienced being locked out of an account before? ",
                "What immediate steps would you take?",
                "Who would be your contact in your organisation?",
                "Why might colleagues be commenting on an urgent email from you?",
              ],
            },
          ],
          title: "Things to consider",
          type: "QUESTION",
          content: [
            {
              type: "TEXT",
              value: "What would you do in this scenario?",
            },
          ],
          open: false,
        },
        {
          information: [
            {
              for: "Yes",
              type: "TEXT",
              value:
                "It is likely that an attacker has gained access to your email account and has used it to attempt to compromise others in the organisation. Now that you have regained access to the account it is important for your organisation to: <br><br><ul><li>Make sure your employees set a new password that is stronger than their old one.</li><li>Enable Multi-Factor Authentication (MFA) if possible.</li><li>Ensure that employees use different passwords for work and personal accounts.</li><li>Check to ensure a forwarding rule has not been set up on employee’s email accounts; this would provide an attacker with a copy of all received emails.</li><li>Change passwords on other accounts where you have used the compromised password</li></ul>",
            },
            {
              for: "No",
              type: "TEXT",
              value: [
                "It is important that your organisations IT team are informed to ensure that they can take mitigating actions to protect you and other users. <br><br><ul><li>Could you be sure an attacker has not accessed any of your other work accounts? </li><li>How will you ensure you will not be locked out again? </li><li>If the attacker targeted you, they might have also targeted others in your organisation. </li></ul>The earlier you inform your IT/Organisation the more likely they’ll be able to help. ",
              ],
            },
          ],
          title: "Your response",
          type: "CHOICE",
          content: [
            {
              type: "TEXT",
              value:
                "You successfully reset your password and you have managed to logon to your work email account.  Would you inform your organisation that your email may have been compromised?",
            },
            {
              type: "CHOICE",
              values: ["Yes", "No"],
            },
          ],
          open: false,
        },
      ],
      title: "Scenario",
      type: "SCENARIO",
      current_step: "6",
    },
    {
      progress_bar_title: "Advice",
      text_block: [
        {
          title: "",
          textType: "HTML",
          text: [
            "There are several best practices for securing your work and personal accounts <br><br><ul><li><strong>Create a strong and memorable password</strong> – one method is using three random words or use built in password generators or password managers. </li><li><strong>Use Multi-Factor Authentication (MFA)</strong> – many companies allow you to set up MFA on your accounts which involves signing into your accounts using two passwords or codes. For example you will use your password first then a code will be sent to your phone.</li><li><strong>Use different passwords for your work account and personal accounts</strong> – using different passwords for different accounts will stop attackers being able to use the same password to access your other accounts. </li><li><strong>Use stronger passwords for email accounts</strong> – attackers can use your email to access many of your personal accounts and find out vital personal information, such as your bank details, address etc. </li><li><strong>Store passwords in a secure manner</strong> – this can involve using a password manager on your device, or if you prefer to write them down then store them securely away from the device. </li><li><strong>Never reveal your full password to anyone</strong></li></ul>",
          ],
        },
      ],
      first_stage: false,
      next_stage: "8",
      id: "7",
      title: "Advice",
      current_step: "7",
    },
    {
      progress_bar_title: "Evaluation",
      first_stage: false,
      next_stage: "9",
      answerable_questions: [
        {
          id: "q1",
          label:
            "Our organisation makes it easy for users to store passwords securely e.g. use of password managers",
          question_type: "LIKERT_SCALE",
          required: true,
        },
        {
          id: "q2",
          label:
            "We have regular training highlighting best practice for passwords, e.g. how to choose passwords that are difficult to guess.",
          question_type: "LIKERT_SCALE",
          required: true,
        },
        {
          id: "q3",
          label: "Our organisation follows ACSC best password practices",
          question_type: "LIKERT_SCALE",
          required: true,
        },
        {
          id: "q4",
          label: "We would know if our passwords had been compromised ",
          question_type: "LIKERT_SCALE",
          required: true,
        },
        {
          id: "q5",
          label:
            "We know who to contact in the event that our email accounts have been compromised ",
          question_type: "LIKERT_SCALE",
          required: true,
        },
      ],
      id: "8",
      title: "Evaluation",
      current_step: "8",
    },
    {
      progress_bar_title: "Conclusion",
      text_block: [
        {
          textType: "PARAGRAPH",
          text: [
            "When implemented correctly, passwords are an effective way to prevent unauthorised access to both work and personal accounts. However as highlighted in this micro exercise, attackers have many ways to find the passwords of their targets. By following ACSC guidance you will make it much more difficult, reducing your risk of becoming a victim.",
          ],
        },
        {
          textType: "PARAGRAPH",
          text: [
            "More top tips and guidance on passwords can be found on the cyber.gov.au",
          ],
        },
      ],
      show_survey: true,
      first_stage: false,
      next_stage: "10",
      id: "9",
      title: "Conclusion",
      current_step: "9",
      last_stage: false,
    },
  ],
  category: "MICRO",
  objective: true,
  feature_flag: "me1-passwords",
  total_steps: "9",
  id: "15",
  title: "Using Passwords",
  type: "MICRO",
};

export function onRequest(context: EventContext<any, any, any>) {
  console.log("using-passwords")

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    },
  });
}
