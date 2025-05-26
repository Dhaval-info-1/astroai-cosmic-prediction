import { supabase } from '../lib/supabase';
// import { generateAstroPrediction } from '../lib/gemini';
import { UserFormData, AstroPrediction } from '../types';

export const generatePrediction = async (userData: UserFormData): Promise<AstroPrediction> => {
  throw new Error('generatePrediction is deprecated. Use generateAstroNumPrediction and saveAdvancedPrediction instead.');
};

// Save advanced (Gemini 2.0) predictions to Supabase
export const saveAdvancedPrediction = async (
  userData: UserFormData,
  prediction: any // or a more specific type if you want
) => {
  const { data, error } = await supabase
    .from('predictions')
    .insert([
      {
        user_name: userData.name,
        birth_date: userData.birthDate,
        birth_time: userData.birthTime,
        birth_place: userData.birthPlace,
        prediction_text: prediction
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error saving advanced prediction:', error);
    throw error;
  }
  return data;
};

// Fetch all predictions or filter by user details
export const fetchPredictions = async (filter?: Partial<UserFormData>) => {
  let query = supabase.from('predictions').select('*').order('created_at', { ascending: false });
  if (filter) {
    if (filter.name) query = query.eq('user_name', filter.name);
    if (filter.birthDate) query = query.eq('birth_date', filter.birthDate);
    if (filter.birthTime) query = query.eq('birth_time', filter.birthTime);
    if (filter.birthPlace) query = query.eq('birth_place', filter.birthPlace);
  }
  const { data, error } = await query;
  if (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
  return data as Array<{
    id: string;
    user_name: string;
    birth_date: string;
    birth_time: string;
    birth_place: string;
    prediction_text: AstroPrediction;
    created_at: string;
  }>;
};

// Fetch a single prediction by its ID
export const getPredictionById = async (id: string) => {
  const { data, error } = await supabase
    .from('predictions')
    .select('*')
    .eq('id', id)
    .single();
  if (error) {
    console.error('Error fetching prediction by ID:', error);
    throw error;
  }
  return data as {
    id: string;
    user_name: string;
    birth_date: string;
    birth_time: string;
    birth_place: string;
    prediction_text: AstroPrediction;
    created_at: string;
  };
};