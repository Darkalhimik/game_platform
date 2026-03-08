import type { GameItem } from "@/entities";

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeQuery(query: string): string[] {
  const normalized = normalizeText(query);
  if (!normalized) {
    return [];
  }

  return normalized
    .split(" ")
    .filter((token) => token.length > 0)
    .slice(0, 8);
}

function buildSearchIndex(game: GameItem): string {
  const playersText = game.players === 1 ? "player" : "players";

  return normalizeText(
    `${game.title} ${game.genre} ${game.players} ${playersText} difficulty ${game.difficulty}`,
  );
}

function calculateSearchScore(indexText: string, tokens: string[]): number {
  let score = 0;

  // Prioritize exact phrase, then startsWith, then partial token matches.
  const phrase = tokens.join(" ");
  if (phrase.length > 0 && indexText.includes(phrase)) {
    score += 12;
  }

  for (const token of tokens) {
    if (indexText.startsWith(token)) {
      score += 4;
      continue;
    }

    if (indexText.includes(` ${token}`) || indexText.includes(token)) {
      score += 2;
    }
  }

  return score;
}

export function searchGames(games: GameItem[], query: string): GameItem[] {
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) {
    return games;
  }

  return games
    .map((game) => {
      const indexText = buildSearchIndex(game);
      return {
        game,
        score: calculateSearchScore(indexText, tokens),
      };
    })
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .map((item) => item.game);
}
