export default {
  setAuthentication(obj) {
    window.localStorage.setItem('auth', JSON.stringify(obj))
  },
  getAuth() {
    const auth = JSON.parse(window.localStorage.getItem('auth'))
    return auth ? auth.token : null
  },
  getUser() {
    const auth = JSON.parse(window.localStorage.getItem('auth'))
    return auth ? auth.login : null
  },
  clear() {
    window.localStorage.clear()
  },
  getQuotes() {
    const quotes = {
      empty: [
        '“It was not the feeling of completeness I so needed, but the feeling of not being empty.” ― Jonathan Safran Foer, Everything Is Illuminated',
        '“I felt very still and empty, the way the eye of a tornado must feel, moving dully along in the middle of the surrounding hullabaloo.” ― Sylvia Plath, The Bell Jar',
        "“There's just something obvious about emptiness, even when you try to convince yourself otherwise. ” ― Sarah Dessen, Lock and Key",
        "“The artist's job is not to succumb to despair but to find an antidote for the emptiness of existence.” ― Woody Allen",
        '“We become aware of the void as we fill it.” ― Antonio Porchia',
        '“It is beautiful, it is endless, it is full and yet seems empty. It hurts us.” ― Jackson Pearce, Fathomless',
        '“Emptiness which is conceptually liable to be mistaken for sheer nothingness is in fact the reservoir of infinite possibilities.” ― D.T. Suzuki',
        '“Nothing has an unlikely quality. It is heavy.” ― Jeanette Winterson, Weight: The Myth of Atlas and Heracles',
        '“I decided I would fill the emptiness in me with God and with paint.” ― Kimberly Novosel',
        '“His own opinion, which he does not air, is that the origin of speech lie in song, and the origins of song in the need to fill out with sound the overlarge and rather empty human soul.” ― J.M. Coetzee, Disgrace',
      ],
      try: [
        '“Do not fear failure but rather fear not trying.” ― Roy T. Bennett, The Light in the Heart',
        '“Only those who dare to fail greatly can ever achieve greatly.” ― Robert F. Kennedy',
        '“To learn something new, you need to try new things and not be afraid to be wrong.” ― Roy T. Bennett',
        "“Don't waste your energy trying to change opinions ... Do your thing, and don't care if they like it.” ― Tina Fey, Bossypants",
        '“It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.” ― Franklin D. Roosevelt, Looking Forward',
        '“Who you are tomorrow begins with what you do today.” ― Tim Fargo',
        '“Trying is always enough.” ― Patricia Briggs, Dragon Bones',
        '“... be radical about grace and relentless about truth and resolute about holiness...” ― Ann Voskamp',
        "“There's doubt in trying. Just do it or stop thinking.” ― Toba Beta, Master of Stupidity",
        '“Never stop dreaming, never stop believing, never give up, never stop trying, and never stop learning.” ― Roy Bennett',
      ],
      fail: [
        "“I have not failed. I've just found 10, 000 ways that won't work.” ― Thomas A. Edison",
        '“There is only one thing that makes a dream impossible to achieve: the fear of failure.” ― Paulo Coelho, The Alchemist',
        '“Pain is temporary. Quitting lasts forever.” ― Lance Armstrong, Every Second Counts',
        '“Failure is the condiment that gives success its flavor.” ― Truman Capote',
        "“Have no fear of perfection - you'll never reach it.” ― Salvador Dalí",
        '“Success is stumbling from failure to failure with no loss of enthusiasm.” ― Winston S. Churchill',
        '“My fault, my failure, is not in the passions I have, but in my lack of control of them.” ― Jack Kerouac',
        '“It is hard to fail, but it is worse never to have tried to succeed.”― Theodore Roosevelt',
        '“All of old. Nothing else ever. Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.” ― Samuel Beckett, Worstward Ho',
        "“Success is most often achieved by those who don't know that failure is inevitable.” ― Coco Chanel, Believing in Ourselves: The Wisdom of Women",
      ],
      success: [
        "“I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.” ― Herbert Bayard Swope",
        '“Try not to become a man of success. Rather become a man of value.” ― Albert Einstein',
        '“Success is getting what you want, happiness is wanting what you get” ― W.P. Kinsella',
        '“The worst part of success is trying to find someone who is happy for you.” ― Bette Midler',
        "“Have no fear of perfection - you'll never reach it.” ― Salvador Dalí",
        '“Success is stumbling from failure to failure with no loss of enthusiasm.” ― Winston S. Churchill',
        "“I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.” ― Abraham Lincoln",
        '“Sometimes it takes a good fall to really know where you stand”― Hayley Williams',
        '“The way to get started is to quit talking and begin doing. ” ― Walt Disney Company',
        '“All you need in this life is ignorance and confidence; then success is sure. ” ― Mark Twain',
      ],
      inspire: [
        '“Do one thing every day that scares you.” ― Eleanor Roosevelt',
        '“We are what we pretend to be, so we must be careful about what we pretend to be.” ― Kurt Vonnegut, Mother Night',
        "“What's meant to be will always find a way” ― Trisha Yearwood",
        '“We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.” ― Maya Angelou',
        '“You never have to change anything you got up in the middle of the night to write.” ― Saul Bellow',
        '“The unexamined life is not worth living.” ― Socrates',
        '“I was never really insane except upon occasions when my heart was touched.” ― Edgar Allan Poe',
        "“It's not the load that breaks you down, it's the way you carry it.” ― Lou Holtz",
        '“The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.” ― Kalu Ndukwe Kalu',
        '“I dream my painting and I paint my dream.” ― Vincent Van Gogh',
      ],
    }

    return quotes
  },
}
