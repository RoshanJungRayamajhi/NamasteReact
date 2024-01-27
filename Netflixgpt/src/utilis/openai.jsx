import OpenAI from 'openai';
import { OPEN_AIKEY } from './constant';


export const openai = new OpenAI({
    apiKey: OPEN_AIKEY, 
    dangerouslyAllowBrowser:true,
    // This is the default and can be omitted
  });
