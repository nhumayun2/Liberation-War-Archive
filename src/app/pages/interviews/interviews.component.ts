import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Interview {
  name: string;
  role?: string;
  bio?: string;
  summary?: string;
  image?: string;
  videooraudioSub?: string;
  rawUrl?: string;
  safeUrl?: SafeResourceUrl;
  interviewDescription?: string;
}

@Component({
  selector: 'app-interviews',
  imports: [CommonModule],
  templateUrl: './interviews.component.html',
  styleUrl: './interviews.component.css',
})
export class InterviewsComponent {
  interviews: Interview[] = [];
  videosubString: string = 'Interview of ';

  constructor(private sanitizer: DomSanitizer) {
    this.interviews = [
      {
        name: 'Major Ziaur Rahman',
        role: 'Military Commander',
        bio: 'Ziaur Rahman was a sector commander in the Liberation War and famously declared the independence of Bangladesh on behalf of Sheikh Mujibur Rahman from Kalurghat radio station in Chittagong.',
        summary: 'Declared independence and led military resistance.',
        image: '/interview/Ziaur_Rahman_1979.jpg',
        videooraudioSub: this.videosubString + 'Major Ziaur Rahman',
        rawUrl: '/interview/Ziaur_Rahman.mp3',
        interviewDescription: `This is a spontaneous and unrehearsed interview with Ziaur Rahman, the President of the People's Republic of Bangladesh, during a special session of the United Nations in New York. The interview, part of the "World Chronicle" program, features questions from three news correspondents on various topics concerning Bangladesh and the developing world.`,
      },
      {
        name: 'Selina Hossain',
        role: 'director of the Bangla Academy',
        bio: 'Selina Hossain (born 14 June 1947) is a Bangladeshi novelist.[2][3][4] Her major works include Hangor Nodi Grenade (1976) and Poka Makorer Ghor Boshoti (1996).[5] She earned all major national awards – Bangla Academy Literary Award in 1980, Ekushey Padak in 2009 and Independence Day Award in 2018.[6] Her novels and short stories have been translated into English, Russian, French, Japanese, Korean, Finnish and Malay.[7][8] She served as the chairperson of Bangladesh Shishu Academy from 2014 until 2018.[9] Selina served as the president of the Bangla Academy from 3 February 2022 until her resignation on 17 October 2024.[10]',
        image: '/interview/selina.jpg',
        summary: 'Talks about cultural impact of the Liberation War.',
        videooraudioSub: this.videosubString + 'Selina Hossain',
        rawUrl: '/interview/Selina-hossain.mp3',
      },
      {
        name: 'Anwar Hossain',
        role: 'Photographer',
        bio: 'Anwar Hossain (Bengali: আনোয়ার হোসেন; 6 October 1948 – 1 December 2018)[1][2] was a Bangladeshi photographer and cinematographer.[3][4] He won Bangladesh National Film Award for Best Cinematography a record five times for the films Sundori (1979), Emiler Goenda Bahini (1980), Puraskar (1983), Anya Jibon (1995) and Lalsalu (2003).[5]',
        summary: 'Captured iconic war photographs.',
        image: '/interview/Anwar-Hossain.jfif',
        videooraudioSub: this.videosubString + 'Anwar Hossain',
        rawUrl: '/interview/Anwar_Hossain.mp3',
      },
      {
        name: 'Tajuddin Ahmad',
        role: 'Prime Minister of the Mujibnagar Government',
        bio: 'Tajuddin Ahmad was the first Prime Minister of Bangladesh, leading the provisional Mujibnagar Government during the Liberation War in 1971. He played a crucial role in organizing the resistance and managing the war effort from exile.',
        summary: 'Led the Mujibnagar government during the war.',
        image: '/interview/Bangataj_Tajuddin.png',
        rawUrl: '',
      },
      {
        name: 'Abdul Karim',
        role: 'Freedom Fighter',
        bio: 'Abdul Karim Khandker, BU (born 31 October 1930) is a former air officer and politician who served as the first chief of air staff of Bangladesh Air Force. He was also the Minister of Planning during Second Hasina ministry. Khandker served as a diplomat during his service days and was the Deputy Chief of Staff of Mukti Bahini during the Bangladesh Liberation War.[3]',
        summary: 'Describes battle in Kushtia.',
        image: '/interview/Abdul_Karim.jpg',
        videooraudioSub: this.videosubString + 'Abdul Karim',
        rawUrl: '/interview/Abdul_Karim.mp3',
      },
      {
        name: 'Shahidullah Kaiser',
        role: 'Writer and Intellectual',
        bio: 'A prominent writer and journalist, Shahidullah Kaiser was abducted by Pakistani forces just before the war ended. He was a vocal supporter of independence and became a martyr among the intellectuals.',
        summary: 'Kidnapped and killed for supporting liberation.',
        image: '/interview/Shahidullah_Kaiser.jpg',
        rawUrl: '',
      },
      {
        name: 'Jahanara Imam',
        role: 'Author and Activist',
        bio: 'Jahanara Imam is remembered as the “Mother of Martyrs” for her memoir "Ekattorer Dinguli" detailing her family’s sacrifices during the war. Her son, Rumi, was a freedom fighter who died in the war.',
        summary: 'Chronicled family’s sacrifice in the war.',
        image: '/interview/Jahanara_Imam_1993.jpg',
        rawUrl: '',
      },
      {
        name: 'Noor Hossain',
        role: 'Martyr and Protester',
        bio: 'While Noor Hossain became famous post-independence, he was deeply inspired by the Liberation War. His legacy is tied to the spirit of resistance stemming from 1971.',
        summary: 'Symbol of post-war resistance tied to 1971 ideals.',
        image: '/interview/noorimages.jfif',
        rawUrl: '',
      },
      {
        name: 'Afsan Chowdhury',
        role: 'Historian and Journalist',
        bio: 'Afsan Chowdhury is a researcher who has extensively documented the 1971 Liberation War. He has interviewed hundreds of witnesses and freedom fighters to preserve their stories.',
        summary: 'Collected oral histories of the war.',
        image: '/interview/2023072808395339.png',
        rawUrl: '',
      },
      {
        name: 'Dr. Neelima Ibrahim',
        role: 'Writer and Academic',
        bio: 'Dr. Neelima Ibrahim documented the experiences of women during the Liberation War, especially in her book "Ami Birangana Bolchi," focusing on war heroines.',
        summary: 'Voiced the suffering of war heroines.',
        image: '/interview/NilimaIbrahimPic.jpg',
        rawUrl: '',
      },
      {
        name: 'M. R. Akhtar Mukul',
        role: 'Broadcaster',
        bio: 'M. R. Akhtar Mukul was the voice of the radio program "Chorompotro" during the war, mocking the Pakistani regime and boosting the morale of freedom fighters.',
        summary: 'Boosted morale through radio broadcasts.',
        image: '/interview/imaasdqwesges.jfif',
        rawUrl: '',
      },
      {
        name: 'Begum Sufia Kamal',
        role: 'Poet and Social Activist',
        bio: 'Sufia Kamal was a vocal supporter of the Liberation War and encouraged many to resist oppression through her writings and activism. She sheltered freedom fighters during the war.',
        summary: 'Supported resistance and sheltered fighters.',
        image: '/interview/sufiakamal.jpg',
        rawUrl: '',
      },
      {
        name: 'Kamal Lohani',
        role: 'Journalist and Cultural Activist',
        bio: 'Kamal Lohani was involved with the Swadhin Bangla Betar Kendra and used media and culture as a tool to resist the Pakistani regime during the war.',
        summary: 'Used culture and radio to support freedom.',
        image: '/interview/1592938732_2.jpg',
        rawUrl: '',
      },
      {
        name: 'Lt. Col. Abu Taher',
        role: 'Army Officer',
        bio: 'Abu Taher was a decorated freedom fighter who led a revolt in Sector 11 during the war and later played a controversial role in Bangladesh’s post-war politics.',
        summary: 'Led troops in Sector 11.',
        image: '/interview/TaherColonelAbu.jpg',
        rawUrl: '',
      },
      {
        name: 'Shamsur Rahman',
        role: 'Poet',
        bio: 'Shamsur Rahman wrote powerful poems that inspired the liberation movement, including the famous “Shadhinota Tumi.” His poetry became a symbol of nationalistic pride.',
        summary: 'Wrote poems that inspired the movement.',
        image: '/interview/shamsurrahman.jfif',
        rawUrl: '',
      },
      {
        name: 'Rawshan Ara Bachchu',
        role: 'Women’s Rights Activist',
        bio: 'A student activist in the 1950s and a supporter of the Liberation War, Rawshan Ara Bachchu mobilized women to support the freedom fighters and documented women’s roles in the war.',
        summary: 'Mobilized women for the freedom struggle.',
        image: '/interview/observerbd.com_1575371478.jpg',
        rawUrl: '',
      },
    ];

    // Sanitize video/audio URLs
    this.interviews.forEach((interview) => {
      if (interview.rawUrl) {
        interview.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          interview.rawUrl
        );
      }
    });
  }
}
