<template>
  <div class="projects">
    <div class="heading projects-header">Projects</div>
    <hr class="about-break" />
    <div class="sidebar">
      <div>
        <b-row
          class="sidebar-row"
          :class="{
            'control--selected': classpatio,
            'control--unselected': !classpatio,
          }"
          @click="
            clickSegmented();
            classpatio = true;
            updateProjectDesc();
          "
          >Class Patio</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{ 'control--selected': bia, 'control--unselected': !bia }"
          @click="
            clickSegmented();
            bia = true;
            updateProjectDesc();
          "
          >Bia</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{
            'control--selected': boonco,
            'control--unselected': !boonco,
          }"
          @click="
            clickSegmented();
            boonco = true;
            updateProjectDesc();
          "
          >Boonco</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{
            'control--selected': toonies,
            'control--unselected': !toonies,
          }"
          @click="
            clickSegmented();
            toonies = true;
            updateProjectDesc();
          "
          >Toonies</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{
            'control--selected': enlightn,
            'control--unselected': !enlightn,
          }"
          @click="
            clickSegmented();
            enlightn = true;
            updateProjectDesc();
          "
          >enlightN</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{
            'control--selected': cortex,
            'control--unselected': !cortex,
          }"
          @click="
            clickSegmented();
            cortex = true;
            updateProjectDesc();
          "
          >CORTEX</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{ 'control--selected': s2a, 'control--unselected': !s2a }"
          @click="
            clickSegmented();
            s2a = true;
            updateProjectDesc();
          "
          >TD Lab</b-row
        >
        <b-row
          class="sidebar-row"
          :class="{ 'control--selected': fly, 'control--unselected': !fly }"
          @click="
            clickSegmented();
            fly = true;
            updateProjectDesc();
          "
          >Fly</b-row
        >
      </div>
    </div>

    <div class="project-desc">
      <transition name="fade">
        <project
          v-if="classpatio"
          title="Class Patio"
          sub_title="Class Patio is a listing of various art lessons for children in Toronto, virtual and in person."
          img1="https://lh3.googleusercontent.com/IQA78lgHR_4D--FYZsWh56ZkqfYaCgZ_hwmmKo5q6B8wuJ5cYdqtAI-nf_jYZms4HGgpGryXkquMdmaSUgkCVw4xQzbVwvFoczNw2GmgX5aC6Njj9qfYn0k3_pWC3QgJfH9lC3ajJs3t3NaMynQ9DWm7CZf8tXnlnJGgpmGTRtfgqGefiTFai4WNJSC3kqZCbqQ6_0xgXLTjcmCn7kUrB7cJIG6LPas2JwIWboA_ooBFnKG3P5kr6qqxzQhaCoesUygd7IYVC5isv6XHP4YxyN3mdjtxR7b08NdE13c5q9Z3SgnBDszpRVdCXIVGS0XwqPyAdp0yH1qEBYMIbkp5iH0ee-95GIusGsKJZLgIII1x1AXRVKkO4oziu2e1wU4frrCxxfXFxcr-f1YnAf6OMqdGoAYNp7ErJOhpKSu4rjKtnGd0gtEHan34VJ9CgnJmGjh2N2tu2aHRJVywYcY_3MoI6zr7AQ1RpQqCgb1-uzqfhsVFIWejHENtwvu2DerlB7CGX0cVH4XrPWtwcDuHFpT34tbEtgyUQIFTyd-tfuktn0ZQwb0UX5fpV5fxWAdk5E5PjE7dyq8uvgYyjPeqJLWXQWfq__407sWNxx2jDzAsD4REVFbn_4BLatXWqAB5sCm8lHZ9W7J51k4m_sGZqvk3detMai4B9crxxztdB1fD3XIr0rtHJhak4Dn9sDoIcxWtkyAZi203hvXDhlJenbz2=w1800-h760-no?authuser=0"
          img2="https://lh3.googleusercontent.com/_0JFjcqiOvdvgxG9RtAymkUOuBP6Fatu-UlFuYZA0bPom7WtX5J_J92r8JmTGePpbZKjBX4pFglswcCNYM8n0jRh4f5Qd3szRmbuyFh7U2OKDyCKyvx-BlsYO9xMXB2eBL2JFRf5aK1jjt5k4tW4JUI-3Ve1C70mum8GRpKyQ8kwydk2_VsRWj8qxewflHaEWW3Rqmtr4Qlymslr-fAfcaL3cEpf_eG1zuvKrtKWpGWsGbgBntWp8l9xe-oCpusrs8Cq1cEREg2bAZdBVsspyp93AHbgtPSZvaiuOFIlHcWH_TaaORBDfM_KlGLq7dUkoAzKXOhgY1aRmHidCPFuFA33bQpfmiyS3hPD4G8O_KkIbSDTdBwVNW4GiuZh3ixBQCMLB6yNdcfu_U6XDSjXvCWwKQusvepT-RHwkaAYEpgbb53EWeTxegU9Gj1dEjBF7A92z6PFp3lPTy1umUU3-EVq0QKv-jihgiJGRNiGMxs_9ywVGpacmkhx7d9TVF7_PNYNt0biA2LR4xhI8cd1-YD2a-tdtMqvtS8DGcQmVvg5d74Tj4V8L1tYUl_h-x3Dj1nitkdb_xtDgesEgbTS-1Wy5gDVjRySKwHbq-oyPfOeRBl2CYHLKO0KSG_HK1SmLM3HQthvsdoziXWOUVHpTuNhfVv0xAUosR22K1Xo5vZdx1VdG16QtiLmeM6SMSAD0-no8qgX-JbIuoCUnbJGNHQn=w753-h450-no?authuser=0"
          par1="During the COVID 19 pandemic there arose the need for online lessons for children since many parents don't know how to fill their children's free time when regular activities are no longer an option."
          par2='Class Patio offers "good screen time" for children, a growing selection of art classes for children of all ages in Toronto.'
          par3="The website was created with a vanilla JS front end and a RoR backend."
          github="https://classpatio.com"
        />
      </transition>
      <transition name="fade">
        <Bia
          v-if="bia"
          title="Bia"
          sub_title="Bia is a workout tracking device for casual gym goers."
          img1="https://lh3.googleusercontent.com/M7Gj8Z_0KHD5WkTC9ZJRi_LNZOuO7nN-nTN0_aGQEsuTc6yYsqlEcAzNxZVSzGH9DQoLpp_s4A8PpUZNHuHsc3AJitHwUlxnSsBOBKvVY5iApRdKTCiU8vL13PhuAlRuN47-Kc4Ho1ywG0qmrVhnrNRaX6iGdXojoqE_LPU6_vcGC_28TBuvsXJx97kiEQmKfivGSUWPJRz_CK5Dek97352TblaOOdJ0YAPRLD7E18YRFnmEr7AiCkfmofA0ohzTbguF-CPGkNg7NTdSvV3d_obdou5GFFzl88ZWtT1TyHzAJNSFlwNTSlQX7V-5YibEtLJA-aEUrMYPBHH7v4qh24m6cU-BLCmHjfS4sZPvDJ4_uiwmPwpUv5Zdyt4Hjtbpo6UK9gwKiRsxKv5N2wDZKAWN5iSQ4mh-hD1X2cS3Qal3pSEoyz2GwpBfOEK1Ttgdy68B_KKgqMOdzbbxfsussshGQGDXkD5LOp-l5s93IP3kmSoHOA7v-BaVvbWGLaIZISzf-3J417Qyg_9fc03vjUTUeoVhLSKan51M1Of-SpOoHFqvckvIGDqz5zdTvvn5jp8zlZlKTjCtMoCzGOI-BF9_Fczi-qFxaoej5YtODpOhvZFjiSBBObOKFPMftD1k35Ajg222BwBo_z9plly04qqx38s6PRXmmZ391zYMrbu5zy-RIOetP5-5QW1Wuw1kOKuHseT5htKNwXKIMei48xse=w810-h1528-no?authuser=0"
          img2="https://lh3.googleusercontent.com/e97yglmqzbYi6OGKNj_UYqNhvfwYzf11ZZIGKetl2hjL9lt2Mi-_ttNOv6p2HSIOpdenQerYSD9gOfOGLuKTrPkVE3MCyBZvhWeL5ftpY_OLsqm7TOt80NCvBszYS1Y1zfxuOyeNdFdGbdAAar74-3H9fr8KQVKhfra5SoOiUUQbEA-cgyRQLDjCD7vOxcXgGm6j65tlRT4ppn89iaKjKXlkCYKysQ16D2eiLJqVvTCKSbvbaTG1Hx-wuMV-L0DHzkrvbtmAlbroR4j7pMhKDLdQahRvPOVV4Jhfy62D0D58wtp6Gx4cyoisCGZWZO0NbH6YiXyZHQbwbQJ25yEwTnSTDZboh5-lYHEOunL8fVvsJkWzzd3gTmdsSQN90WBTuPYTWojtjMHjeHi1AHX1fB8gasxLsYd0PzgMb0tWMFS51JeA69rCMpNY9ksoJ5Npe0lRKqFOAYep06bLv1LzxqudW-Dy_v4G1XuzJMlQzONPG1Ozr4B1pEJcXDM-ADVEGmWTYVaNteU7G-hTmHnzVyoOwuZ6N04z5uMZNDALmX8XwQqJVNDShQYSFB5k4Gv9CuvkkmDzZHMt_aNO0DIXYbqJ4BDCDev6yCCkAWu5Yxt4NSTBJRDjxiGzz-BQl3me7y3dRFd4cdTYkKKVGuwBQS0y4J5H7d3-1msv2QP2_wM_9sw3U15itL1033pszWkB3bNxL7dhIjpVSbeYdtL-xfiu=w206-h367-no?authuser=0"
          par1="The device uses an inertial motion unit (IMU), a bluetooth low energy (BLE) module, and force sensitive resistors (FSRs)  to pair with your iPhone and give you feedback about your workout. The aim is for the tool to determine what kind of exerciese the user is doing, how much weight they're lifting, and the quality of their form."
          par2="Currently, the tool exists as an Arduino prototype. The rep detection and iPhone connectivity is functional, but other features are still in development."
          par3="No longer will weight lifting intimidate new gym goers, and no longer will intermediate gym goers be required to manually track their exercises. Bia will be the most valuable, accessible, and inexpensive personal trainer ever."
        />
      </transition>
      <transition name="fade">
        <Boonco
          v-if="boonco"
          title="Boonco"
          sub_title="Boonco is a marketplace for lenders."
          img1="https://lh3.googleusercontent.com/Qj-IYMdU8kxbuTY7XFO6unkaaazYTi4nxmOIy6j44qEman7S4kjwBgYBOsGzeHx1YwP_IKEU7Z_joRN_kDKiRN4dDy6BmWjAuI-rWnzs40iZxWH6bYifA5wbAy5xYKou566fI2XVBcuXBL0Xd8KOE3_Mi-kZ2Vjw-1KhJs6RFClP3HiKrdN9iV-afkMsdeoAET2BThYqIwPodx66mIla1b71VqsfYYlYe-6xI56xYFRsBc8GaDSgdWdpKJJqduwSawSchjXQ9d0ZxbdVUOq5wb_oMUOT6kTH-qZmFr-43gC8UEHzN4WOa5dS8tj389ONOaPO7hesJ_WFRPuruQuxjhkEYXeU04Bd_uVJvIJfWDvNvTgf0NYSfaqiw2LDLQ17x7P07gaQRQ9ev0e1eHWNJLGezVVKVR5rLnkhupasgzCeApTXeFv6F0YxmJ35tS5D6cJL-EAirswtA8OotchRb83_1T0EXxKJdvOa_FHJ0K0AxW3s-Zgzp-oRGJqu3733G_Ws9rLBH8U8Aho4tGoVUWMo5WLR9BvVH8F64UGwP8outx69sYJidJkE4bCd-5e075Z-sx7DFzDWmcr8VqNNTHD3DDYEPcCGfCYJK0vXaL-OmdGnfn7JRl-hZkUrTf9kDfZBym029OrOog6HMMfh0y_kSmQ2MQgA0bF1fyj7NywHQT4_JgWs9p7OL11M1_8IDxM6Yb0fwhcfKMTqyJ-feXPZ=w946-h1528-no?authuser=0"
          par1="The marketplace, which exists as an iOS app and RoR backend, enables anyone to browse or post listings in their area. Users interested in a listing can place bids. If the poster accepts a users bid, their personal information is revealed and they can then coordinate the lending/borrowing of the item featured in the listing."
          par2="This solution enables users to consume cheaply and environmentally friendlier than outright purchasing items."
          github="https://boonco.ca"
        />
      </transition>
      <transition name="fade">
        <project
          v-if="toonies"
          title="Toonies"
          sub_title="The mission of Toonies is to teach financial literacy to young adults and teenagers who want to create more value with their money."
          img1="https://lh3.googleusercontent.com/fZXBf2Teb3kW55RcTulvdmsa_pHqHxe5fr8TEMZNtQMjrxcbx4eoNdGwembo6xNGIlp7IPQfUBCpeof5cxQ6r1WRRtZXEJQxYCcXXooCRK0bxSEbzRkpl8JzYQE5qq70EBexMseB3Q=w2400"
          img2="https://lh3.googleusercontent.com/TDhqw1Cd1Njoo40wG4-lvEwZCDW3wI-RylUjoW8UgAZlSFbG7CbyuPdBPAMZhi_RQi2wRtcaRZAZHHXYKDTAmQ2q_PiwqQXa23XsTVqD7oYigaKsNo7QFqspIHiCVfqLcc56M3IHwg=w2400"
          par1="Toonies is a platform anyone can use to learn about investing. It is divided into two core functionalities, the first is the ability to learn through click-based lesson modules. The second is the simulated stock portfolio with metrics that directly correspond to the lesson modules. The website was created using Vue.js and Firebase to host the backend."
          par2="There exists a subset of teenagers and young adults who, through various means, have accumulated enough savings to invest in various securities and increase their savings. This subset, however, is too intimidated by the wealth of information present on the internet and the lack of organization. Currently, information is prevalently available through online encyclopedias, articles that assume existing knowledge on the reader, and online courses from websites including Coursea, Udemy, and Udacity."
          par3="The most popular investing course on Udemy; “Investing In Stocks The Complete Course!” by Steve Ballinger has 35’000 students enrolled. investopedia.ca, an online encyclopedia about investing has had 41 million visits and is growing. It is not presumptuous, therefore, to assume a sizeable market in the financial education sector exists that can be captured through different mediums."
          github="https://github.com/jacobgoldfarb/Toonies"
        />
      </transition>
      <transition name="fade">
        <Cortex
          v-if="cortex"
          title="CORTEX"
          sub_title="CORTEX was my submission to UofT Hacks VI. I developed and designed the iOS app over 36 hours in Toronto, January 2019."
          img1="https://lh3.googleusercontent.com/JZ4HYASGSncr8qq8ZUIcKri1kqxwGr-ZsIiRNtzLed3Pbr-1PQvZxRPcKHCOJiwWAybO1FRAYqTZ8x4e3otQNJD9VVwDmdbgN_ZJ8xq3vM-Unk0bjmh0gMkD1QFABjf326k1MN12zg=w2400"
          img2="https://lh3.googleusercontent.com/hC0DnH6dhG2YBJ_10re5slkb6rqk-ddQBW8xAeRSq1w5j_1IZ9RyPx7ALIowqte64Dboa5aLuSNDqxox5tm-_cMCdOe9bOvcUxbZNUGCIAhuJvQq8zveozlL8n39gEc6tcSpIHrbFw=w2400"
          par1="CORTEX is an iOS app featuring two minigames which helps people with different cognitive impairments. We decided to focus on two specific cases: 1) aiding autistic people read and understand facial expressions, and 2) people who suffer cognitive impairment following intermediate and severe strokes. For the first group we created a minigame called Sweet Emotion. The user points their device's camera at a face, and they must then correctly identify the facial expression via a quiz like interface. The second game, called Magnifying Glass 2, lets users point their device's camera at various objects and attempt to correctly identify said object through another quiz like interface. The users can collect points which are stored on a Firebase backend."
          par2="Touch screen devices have been used increasingly in the domain of cognitive healing. There generally is no one-size-fits all solution to help rehabilitate these victims. This is validated by a list of methods to treat amnesia from psychologytoday.com which includes hypnosis, energy psychology, cognitive therapy, nutrition and technical assistance from iPhone, iPad, tablet as potential treatment methods"
          par3="Since the tool is designed for people who may have limited cognitive functions, the following design principles should be stressed: 1) the exercises should be minimalistic in design, without too many cues (2) The app should rely on recognition rather than recall, and (3) instructions should be easily understandable. We realized these goals by opting for a minimalistic interface and also included audible instructions at every touch point."
          github="https://devpost.com/software/cortex"
        />
      </transition>

      <transition name="fade">
        <Cortex
          v-if="fly"
          title="Fly"
          sub_title="Fly was the first iOS app I created"
          img1="https://lh3.googleusercontent.com/BoZZGeg7-Y9ibMc5L6Oskp4pFjwANT3B5DIXYmQH-ALjyW5g24qWdCbXT5aVXm8af-6b-Xjcz-txfpSFN4IMr0k3MrzhlEGo4Ln3vSXUlfHvuM-Wc-r0tPzonsLeW7B7iHY-jE3JPw=w2400"
          img2="https://lh3.googleusercontent.com/2ONpXLxmWaXJshIibSXRkCxjZJWeLTm2be_OLnhkxliMIgEkAXSGaTkCdoliFLcpKqoIrkLEUpzZrKuHSgSDmfhK2yb8ghJdkd4j9Um5l1fYce5RPwq5Za3ag9FqrWXuM9_RslFcaA=w2400"
          par1="The user could change sliders representing their affinity towards various elements of a vacation such as night life, dining, hiking, etc., and the app would then generate an itinerary based on their preferences."
          par2="The app uses Foursquare's API to find relevant venues based on an algorithm using the user's inputs as parameters."
          github="https://github.com/jacobgoldfarb/ItineraryApp"
        />
      </transition>
      <transition name="fade">
        <TDProjects
          v-if="s2a"
          title="TD Lab"
          sub_title="During my Fall 2018 coop term I worked at TD Innovation Lab in Kitchener. There I got to work on a lot of really cool projects, and three hackathon projects based on product statements to help TD grow in various areas."
          img1="https://lh3.googleusercontent.com/VY94-o1lQciZWPJ31lRWRlQppKV_1KdlnAeUxCXI_5kOVIe-0Ni4RKQX9bNc6drzVLHyKYIzIgYw33f88No3M4Gjpz-GpsMzQpcIqUGCgI4r0L9vivKmp18Oor1vL0P_nCJjkHCQvA=w2400"
          img3="https://lh3.googleusercontent.com/0eRXaVnQQkrvfT4rJRxV2sMyDsqzLXqazwNK7zDVFx1zgZ-sX5dph0fptwfquO_NhrvI19e_4MugAwKPs3viqs8MIbAvY57r0_UqHkzs52KvvziAggPLuD-6nLXMVVQk-XCHtQKnlw=w2400"
          img2="https://lh3.googleusercontent.com/ZZxrCaeZuYqwPyQ_7lnxLkP7o6eGKPa8_0RD43pmKs56FeQSMCk8KZJg4NDCot0XvHUNl09A12lnTIXawqKSa3Yi01BODsV4M_Fxb6CFMdHNy0zJv15s7ZeY5urw07QXB48I1X5kig=w2400"
          par1="For my first month at TD I worked on Sketch2App, a framework that allows the user to photograph a hand-drawn wireframe, and then converts it into a functioning iOS app. I developed the iOS app that the user could use to convert the wireframe, including an element inspector that could be used to change various properties (color, font, size, etc.) of each user interface element (image, text field, button, etc). "
          par2="Carbon is an integrated media app that is intended to increase user engagement with applications that Gen Z uses (ex. Netflix) and the bank, through gamification."
          par3="Integrating the FourSquare API, Pocketpatch is a data-driven app that analyzes users' spending patterns and offers them cheaper alternatives relative to their locations."
          github="https://www.communitech.ca/how-we-help/innovation/corporate-innovation/td-bank-group/"
        />
      </transition>

      <transition name="fade">
        <Project
          v-if="tracker"
          title="Engineering Projects"
          sub_title="The mission of Toonies is to teach financial literacy to young adults and teenagers who want to create more value with their money."
          img1="https://lh3.googleusercontent.com/fZXBf2Teb3kW55RcTulvdmsa_pHqHxe5fr8TEMZNtQMjrxcbx4eoNdGwembo6xNGIlp7IPQfUBCpeof5cxQ6r1WRRtZXEJQxYCcXXooCRK0bxSEbzRkpl8JzYQE5qq70EBexMseB3Q=w2400"
          img2="https://lh3.googleusercontent.com/TDhqw1Cd1Njoo40wG4-lvEwZCDW3wI-RylUjoW8UgAZlSFbG7CbyuPdBPAMZhi_RQi2wRtcaRZAZHHXYKDTAmQ2q_PiwqQXa23XsTVqD7oYigaKsNo7QFqspIHiCVfqLcc56M3IHwg=w2400"
          par1="Toonies is a platform anyone can use to learn about investing. It is divided into two core functionalities, the first is the ability to learn through click-based lesson modules. The second is the simulated stock portfolio with metrics that directly correspond to the lesson modules. The website was created using Vue.js and Firebase to host the backend."
          par2="There exists a subset of teenagers and young adults who, through various means, have accumulated enough savings to invest in various securities and increase their savings. This subset, however, is too intimidated by the wealth of information present on the internet and the lack of organization. Currently, information is prevalently available through online encyclopedias, articles that assume existing knowledge on the reader, and online courses from websites including Coursea, Udemy, and Udacity."
          par3="The most popular investing course on Udemy; “Investing In Stocks The Complete Course!” by Steve Ballinger has 35’000 students enrolled. investopedia.ca, an online encyclopedia about investing has had 41 million visits and is growing. It is not presumptuous, therefore, to assume a sizeable market in the financial education sector exists that can be captured through different mediums."
          github="https://github.com/jacobgoldfarb/Toonies"
        />
      </transition>
      <transition name="fade">
        <enlightN
          v-if="enlightn"
          title="enlightN"
          sub_title="enlightN was our submission to Stanford TreeHacks 2019. We (a team of four) developed the tool over 36 hours in Stanford during February of 2019."
          par1="The prevalence of fake news has been on the rise. It has led to the public's inability to receive accurate information and has placed a heightened amount of distrust on the media. With it being easier than ever to propagate and spread information, the line between what is fact and fiction has become blurred in the public sphere. Concerned by this situation, we built a mobile application to detect fake news on its websites and alert people when information is found to be false or unreliable, thereby hopefully bringing about a more informed electorate."
          par2="enlightN is a mobile browser with built-in functionality to detect fake news and alert users when the information they are reading - on Facebook or Twitter - is either sourced from a website known for disseminating fake news or known to be false itself. The browser highlights which information has been found to be false and provides the user sources to learn more about that particular article."
          par3="We were able to successfully detect false information from any site after especially handling facebook and twitter. The app works and makes people aware of disinformation in real-time!"
          github="https://devpost.com/software/enlightn"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Project from "./projects/Project.vue";
import Bia from "./projects/Bia.vue";
import Boonco from "./projects/Boonco.vue";
import Cortex from "./projects/Cortex.vue";
import TDProjects from "./projects/TDProjects.vue";
import enlightN from "./projects/enlightN.vue";
export default {
  name: "Projects",
  components: {
    Project,
    Cortex,
    TDProjects,
    enlightN,
    Bia,
    Boonco,
  },
  methods: {
    clickSegmented() {
      this.classpatio = false;
      this.bia = false;
      this.boonco = false;
      this.toonies = false;
      this.cortex = false;
      this.drone = false;
      this.carbon = false;
      this.tracker = false;
      this.fly = false;
      this.pocketpatch = false;
      this.s2a = false;
      this.enlightn = false;
    },
    updateProjectDesc() {
      if (this.toonies) {
        this.projectDesc =
          "Toonies is a platform anyone can use to learn about investing. It is divided into two core functionalities, the first is the ability to learn through click-based lesson modules. The second is the simulated stock portfolio with metrics that directly correspond to the lesson modules. The website was created using Vue.js and Firebase to host the backend.";
      } else if (this.s2a) {
        this.projectDesc =
          "Sketch 2 App is a tool I developed while working at TD Lab. It's an iOS app that designers can use to rapidly prototype their creations. Once a wireframe has been drawn, the user simply captures a picture using their iOS device. The picture is then converted into a functional iOS app on the front end using CoreML and other alignment fixing algorithms. Each element UI element (e.g. image, text field, slider, buttons, etc.) can be fully customzied.";
      }
    },
    getProjectRef() {
      if (this.toonies) {
        return "https://github.com/jacobgoldfarb/Toonies";
      }
    },
    getImageSource() {
      if (this.toonies) {
        return "../assets/toonies-intro-mock.png";
      }
    },
  },
  created() {
    this.updateProjectDesc();
  },
  data() {
    return {
      classpatio: true,
      bia: false,
      boonco: false,
      toonies: false,
      cortex: false,
      drone: false,
      pocketpatch: false,
      carbon: false,
      tracker: false,
      fly: false,
      s2a: false,
      enlightn: false,
      projectDesc: "",
    };
  },
};
</script>

<style scoped>
.projects {
  /* box-shadow: -2px 2px 5px rgba(88, 88, 88, 0.5); */
  /* width: 80%; */
  /* overflow: auto; */
  /* margin: 5rem auto; */
}
.text-container {
  padding: 2rem;
  text-align: left;
  /* width: 50%; */
}
.segmented-control {
  /* margin: 0 auto; */
  /* position: absolute; */
  /* display: inline; */
  margin: 2rem auto;
  height: 2.5rem;
  width: 90%;
}
.control--selected,
.control--selected:active,
.control--selected:focus,
.control--selected {
  box-shadow: unset;
  color: red;
  border: unset;
}
.control--unselected,
.control--unselected:active,
.control--unselected:focus {
  color: black;
  background: white;
  box-shadow: unset;
  /* border: unset; */
}
.control--unselected:hover,
.control--selected:hover {
  font-weight: 500;
  color: red;
}
.mockup {
  height: 10rem;
  width: auto;
}
.projects-header {
  margin: 2.5rem auto;
  display: inline-block;
  text-align: center;
}
.project-desc {
  margin-left: 10%;
}
.about-break {
  background-color: #d0021b;
  float: center;
  height: 3px;
  width: 70%;
}
.sidebar {
  margin-left: 17%;
  color: #606060;
}
.sidebar-row {
  padding-top: 0.4rem;
  width: 10%;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
