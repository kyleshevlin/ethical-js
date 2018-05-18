# Ethical JS Talk

### Opening

While preparing for this talk, really any talk I give, I like to gather up a lot of ideas, read related articles, and then I just let them ruminate in the back of my mind for quite some time. I like to let them simmer on the back burner of my brain like a pot full of ingredients, allowing time to reduce it down into a nice idea... sauce, I guess. You get what I'm talking about.

One of those ideas that kept popping into my brain during this process was a scene from a recent movie. How many of you have seen the Imitation Game?

_Respond to the audience_

Great. For those of you who haven't seen it, Benedict Cumberbatch depicts Alan Turing and his work during WWII.

Major spoiler alert ahead. Just putting this out there. We beat the fucking Nazis.

Instrumental in their defeat was Turing's work deciphering Nazi communications. Given that the overarching subject of this talk is _ethics_, some of you might recognize that Turing's work itself raises several ethical questions. Do we have a fundamental right to privacy? If so, do circumstances exist where the right can be justly violated. To what extent can this right be violated.

I won't answer those questions, but I hope this gets you thinking.

Back to the movie. Instrumental to defeating one of, if not _the_, most heinous regimes in human history was deciphering the Nazis encrypted communications through a device called Enigma. To do this, Alan Turing worked on building bombes.

That's right, bombes, with an "e". You might know these devices as Turing machines, but they weren't called that at first.

These bombes were built because the Allied forces recognized that one of their best methods to deciphering encrypted was the use of computational power.

In the pivotal scene of the movie, Turing and his colleagues are out for a drink when he has an epiphany. Maybe some of you had an epiphany last night at the party, huh, Huh? Turing recognizes that he can improve the efficacy of the machine by eliminating unnecessary permutations that the machine needs to check for. This isn't unlike many whiteboard questions where the trick is to eliminate unnecessary checks.

In the movie, they rush back to their machine, plug in some expected values and voila, they crack Enigma. The reason this relates to ethics comes next.

The characters spend the night deciphering messages, specifically, they map out the locations of the Nazi U-boats and realize that a passenger ship full of civilians will be imminently under attack. Hundreds of people will die, including a brother of Turing's colleague. Relaying the information to the ship could save those lives, but Turing alone, at least according to the movie, recognizes that to do so is to reveal that they have cracked Enigma. Their ability to decipher Nazi communications could potentially save exponentially more people. Quite the quandary.

Or not the quandary at all if you're a utilitarian ethicist and a cold hearted son of a bitch, but, still a quandary nonetheless. The reason this scene resonates in my mind is that it _might_, regardless of fictionalization, _might_ be one of the first times an ethical decision needed to be made due to the ramifications and consequences of work involving computer science. And that is what I'm here to talk to you about today. The ethics of software engineering.

This talk is called "EthicalJS: Why Our Next Frameworks Need to be Coded With Ethics". As you might have guessed, it's a bit of play on the fact that, as many of you know, our industry seems inundated with new JavaScript frameworks. Personally, I love it. I know many are exhausted by it. Regardless, a question remains, is the proliferation of more frameworks really what we as software engineers need to be focused on at this moment?

# Self Introduction

So that was a long bit of time for me to be yapping without introducing myself, so let me do that.

Who am I? A philosophical question indeed, but I'll answer it more practically.

_Introduce yourself_

That all out of the way, perhaps your first question is "What on earth qualifies you to talk to us about philosophy and ethics, Kyle?"

Good question. First, my bachelor's degree is not in computer science, but in philosophy. At one point, I believed my path was to become a professor of philosophy. I even wrote a Senior Honor's Thesis on Postmodernity and Ethics. True story, I wrote 70 of its 92 pages in the last 36 hours before it was due. Not unlike the slides for this talk. I'm a bit of a procrastinator. My chaos monkey gets the better of me if you're familiar with Tim Urban's TED talk.

So, I have studied the subject potentially a bit further than your average software engineer, which brings me to my second qualification. _I am a software engineer_. It might behoove us as engineers to care about where our industry and ethics intersect. We do not exist in some void where we are exempt from ethics, hidden behind our keyboards or our Twitter handles. This shit is real, and it matters, and I hope to persuade you of that fact.

On top of that, I was a pastor for several years, I have a MA in Theology, and I spend too much time philosophizing about each and every random thing that I just had to talk about it.

I wanted to share the tweet I put out that gave me the confidence to bring this talk to a conference, and I want to thank Revolution Conf for accepting a talk that has absolutely no code in it. It's a bold move Cotton, let's see how it works out for them.

Now that being said, you've heard of the acronym IANAL, I am not a lawyer, I feel compelled to say, IANAAP, I am not an academic philosopher and haven't studied it with rigor in some time, despite using it every day in my work.



### Lots of fucked up things going on in the world right now

- Dirty Money - Explores the Volkswagen emissions scandal that led to the arrest of a software engineer.

- Uber develops Greyball - a program designed to detect police and reroute drivers to avoid the police. [](https://www.inverse.com/article/28646-uber-greyball-public-officials)

- Facebook changes makes public group wall posts visible on people who have otherwise kept the their group membership private, leading to the outing of a young woman to her family [](https://vimeo.com/68470326)

- The entire state of Hawaii is sent an alert informing them of their imminent death because two buttons, almost identical, were positioned too closely together in a user interface. [](https://dev.to/ben/the-hawaii-missile-alert-was-the-software-developers-fault-2bid)

- Facebook's "suggested friends" feature is so good, that it began matching terrorists of unassociated groups, allowing for the creation of new hybrid associations. [](https://www.telegraph.co.uk/news/2018/05/05/facebook-accused-introducing-extremists-one-another-suggested/)



### What are we doing about it?

Nothing.

We call ourselves software engineers, but we don't want the rigor, and responsibility that comes with the word "engineer".

I'm here to say that if we are going to continue to co-op the word for our industry than it is time we start adopting some of the same practices as engineers

Run through the history of ethics in engineering

---

We an deploy globally to millions of people a day and we pat ourselves on the back for doing a code review, where most of them just get a LGTM stamp and a thumbs up emoji.

---

We need to ask ourselves, when we have to make decisions at work, are we gonna be



### What is ethics?

Ethics in a nutshell is the study of the good life. Socrates said,

> The most important thing is not life, but the good life.

We are all working towards having a good life. What's even better, as software engineers, it is often our goal and within our abilities to make other people's lives better. It has been argued that to live a good life, one must make a positive contribution to the world, and we get to do that through code.



### To Whom are we responsible?

Frankly, almost everyone. Outside of celebrities and perhaps politicians, whose work reaches more people? If you are working at a rather large organization, your work can potentially impact millions of people.

- Concept of a stakeholder, but in an ethical sense

I myself am a stakeholder, since my actions also impact my own life



### Why do software engineers have obligations to the public?

Because it's a profession. Profession comes from the word profess, how many of you are proud to say you're software engineers, I am? I wear that like a badge of honor. This isn't just a job, it's a profession, and professionals are held accountable for the work that they do.

Most other professional industries require advanced training. Not the case with software engineering. Look at me, a former pastor turned programmer, I didn't do any advanced training in an accredited institution. This is wonderful! We don't need pay walls and barriers, but we don't have to accept those for the sake of investing into our industry in more ways than just learning to code better.



### What General Ethical Obligations do we have as software engineers?

Virtue Ethics - think Confucius, Aristotle, Aquinas, Hume, Nietzche

Virtue ethics focuses on the qualities of morally excellent people. What is the virtuous person like and in so creating a model, an exemplar, we are shown how we must strive to be.

1) Establish why to develop moral character
2) Establish where to look for these moral exemplars
3) Directs us towards a lifelong pursuit of phronesis, practical wisdom

Utilitarian Ethics

Focuses exclusively on consequences. What action creates the greatest good in the world.

Hedonic calculus, qualitative versus quantitative pleasures, Bentham, Mill

Deontological Ethics - principle based, axiomatic, duty-based ethics

Immanuel Kant - Categorical Imperative

### Given these schools of ethical thought, what should we do as software engineers



### Practical ways of developing a framework of Ethics

Virtue Based - Establish morally sound exemplars to follow

Utilitarian Based - practice pre-mortems, spending time doing evaluations of what could go wrong before building the feature or software

Deontological - Have ethical guidelines in place
