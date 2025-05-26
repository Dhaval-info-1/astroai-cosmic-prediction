/*
  # Create predictions table

  1. New Tables
    - `predictions`
      - `id` (uuid, primary key)
      - `user_name` (text)
      - `birth_date` (date)
      - `birth_time` (time)
      - `birth_place` (text)
      - `prediction_text` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `predictions` table
    - Add policy for public access (read-only)
*/

CREATE TABLE IF NOT EXISTS predictions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  birth_date date NOT NULL,
  birth_time time NOT NULL,
  birth_place text NOT NULL,
  prediction_text jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Predictions are viewable by everyone"
  ON predictions
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert predictions"
  ON predictions
  FOR INSERT
  TO public
  WITH CHECK (true);