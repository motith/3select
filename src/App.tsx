import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const TAROT_CARDS = [
  { id: 0, name: '愚者' },
  { id: 1, name: '魔術師' },
  { id: 2, name: '女教皇' },
  { id: 3, name: '女帝' },
  { id: 4, name: '皇帝' },
  { id: 5, name: '教皇' },
  { id: 6, name: '恋人たち' },
  { id: 7, name: '戦車' },
  { id: 8, name: '正義' },
  { id: 9, name: '隠者' },
  { id: 10, name: '運命の輪' },
  { id: 11, name: '力' },
  { id: 12, name: '吊るされた男' },
  { id: 13, name: '死神' },
  { id: 14, name: '節制' },
  { id: 15, name: '悪魔' },
  { id: 16, name: '塔' },
  { id: 17, name: '星' },
  { id: 18, name: '月' },
  { id: 19, name: '太陽' },
  { id: 20, name: '審判' },
  { id: 21, name: '世界' },
];

const PRESET_THEMES = [
  '好きな人から告白される可能性は？',
  'あの人が隠してるあなたへの本音',
  'これから二人の関係どうなる？',
  '今、この瞬間の好きな人の気持ちは？',
  '大好きなあの人と結ばれる日は来る？',
  'あの人の心の中に私はいるの？',
  'あの人は恋愛対象として見てる？',
  'もうすぐ現実になる恋の行方',
  '今のあの人の素直な気持ちは？',
  'あの人はあなたに何を隠してる？',
  'あの人からの緊急メッセージ',
  'あなたの恋愛これからどう進む？',
  'あの人はこの関係に何を思ってる？',
  'あのひとのリアルな本音',
  '大好きな人はあなたの連絡を待ってる？',
  '好きな人はあなたに恋心を抱いている？',
  'あの人にとって今のあなたの存在は？',
  'あなたの恋まもなくハッキリすること',
  '大好きなあの人のあなたへの本気度は？',
  '彼はあなたに会いたいと思ってる？',
  'あなたに言えないあの人の気持ちは？',
  'この関係あの人はどうしたい？',
  '好きな人には好きな人がいる？',
  '実はあなたにべた惚れしてる人',
  'あなたに本気で告白を考えている人',
  'あなたが次に付き合う人の特徴',
  '1年後にあなたの隣にいる人',
];

const READING_STYLES = {
  SUPPORTIVE: '寄り添い方',
  TOUGH: '辛口方',
};

interface CardSelection {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(READING_STYLES.SUPPORTIVE);
  const [selectedCards, setSelectedCards] = useState<CardSelection[]>([]);
  const [isReading, setIsReading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.target.value);
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStyle(event.target.value);
  };

  const handleCardSelect = (card: CardSelection) => {
    if (selectedCards.length < 3 && !selectedCards.some(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const generateReading = () => {
    if (selectedCards.length !== 3) return;

    // 占いテーマとカードの組み合わせに基づいて結果を生成
    const readings = selectedCards.map((card, index) => {
      const cardName = card.name;
      const theme = selectedTheme;
      
      // カードの意味に基づいた占い結果を生成
      let reading = '';
      
      // カードの意味に基づいた基本的な解釈
      switch(cardName) {
        case '愚者':
          reading = '新しい始まりや冒険の象徴。冒険心を大切に。';
          break;
        case '魔術師':
          reading = '意志力と行動力の象徴。自分の力で目標を達成できる。';
          break;
        case '女教皇':
          reading = '直感と内面の声を大切に。深い知識や叡智が得られる。';
          break;
        case '女帝':
          reading = '豊かさと創造性の象徴。愛情深い関係性が期待できる。';
          break;
        case '皇帝':
          reading = '安定と権威の象徴。リーダーシップが発揮できる。';
          break;
        case '教皇':
          reading = '伝統と精神的な指導の象徴。正しい道を示される。';
          break;
        case '恋人たち':
          reading = 'パートナーシップと選択の象徴。相性の良い関係が期待できる。';
          break;
        case '戦車':
          reading = '勝利と前進の象徴。目標に向けて進む力が得られる。';
          break;
        case '正義':
          reading = 'バランスと公平の象徴。正しい判断が下せる。';
          break;
        case '隠者':
          reading = '内省と指導の象徴。深い洞察が得られる。';
          break;
        case '運命の輪':
          reading = '変化と運命の象徴。新しい機会が訪れる。';
          break;
        case '力':
          reading = '自己制御と意志力の象徴。困難を乗り越えられる。';
          break;
        case '吊るされた男':
          reading = '視点の変化と犠牲の象徴。新しい視点が得られる。';
          break;
        case '死神':
          reading = '変容と終焉の象徴。古いものを手放す時。';
          break;
        case '節制':
          reading = '調和とバランスの象徴。適切な調整が可能。';
          break;
        case '悪魔':
          reading = '束縛と物質的な欲求の象徴。自由を求める時。';
          break;
        case '塔':
          reading = '破壊と混乱の象徴。予期せぬ変化が訪れる。';
          break;
        case '星':
          reading = '希望と理想の象徴。明るい未来が期待できる。';
          break;
        case '月':
          reading = '直感と不安の象徴。深い洞察が必要。';
          break;
        case '太陽':
          reading = '成功と幸福の象徴。明るい未来が約束される。';
          break;
        case '審判':
          reading = '再生と覚醒の象徴。新しい始まりが訪れる。';
          break;
        case '世界':
          reading = '完成と達成の象徴。目標が達成される。';
          break;
        default:
          reading = '未知のカードの意味が得られる。';
      }

      // 占いテーマに基づいた具体的な解釈を追加
      if (theme.includes('告白')) {
        reading += '\n\nあなたの心に寄り添う言葉：\n' +
                  'このカードは、あなたの恋愛運が好転する兆しを示しています。\n' +
                  '相手の気持ちを理解し、自分らしく進むことが大切です。\n' +
                  '勇気を持って前に進むことで、良い結果が得られるでしょう。';
      } else if (theme.includes('本音')) {
        reading += '\n\n相手の本音を読み解く：\n' +
                  'このカードは、相手の内面の感情を映し出しています。\n' +
                  '深いコミュニケーションを心がけることで、相手の本当の気持ちを理解できます。\n' +
                  '素直な気持ちを大切にすることを忘れないでください。';
      } else {
        reading += '\n\n一般的なアドバイス：\n' +
                  'このカードは、あなたの現状と未来を示しています。\n' +
                  '現在の状況を冷静に分析し、適切な行動を取ることが大切です。\n' +
                  '前向きな姿勢で進むことで、良い結果が得られるでしょう。';
      }

      return reading;
    });

    setResults(readings);
    setIsReading(true);
  };

  const resetReading = () => {
    setSelectedTheme('');
    setSelectedStyle(READING_STYLES.SUPPORTIVE);
    setSelectedCards([]);
    setIsReading(false);
    setResults([]);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        タロットリーディング
      </Typography>

      {!isReading ? (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            占い設定
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              占いテーマ
            </Typography>
            <TextField
              select
              fullWidth
              value={selectedTheme}
              onChange={handleThemeChange}
              sx={{ mb: 2 }}
            >
              {PRESET_THEMES.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </TextField>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              鑑定スタイル
            </Typography>
            <RadioGroup
              value={selectedStyle}
              onChange={handleStyleChange}
              row
            >
              <FormControlLabel
                value={READING_STYLES.SUPPORTIVE}
                control={<Radio />}
                label={READING_STYLES.SUPPORTIVE}
              />
              <FormControlLabel
                value={READING_STYLES.TOUGH}
                control={<Radio />}
                label={READING_STYLES.TOUGH}
              />
            </RadioGroup>
          </Box>

          <Typography variant="h6" gutterBottom>
            カード選択
          </Typography>
          <Grid container spacing={2}>
            {TAROT_CARDS.map((card) => (
              <Grid item xs={4} key={card.id}>
                <StyledCard
                  onClick={() => handleCardSelect(card)}
                  sx={{
                    opacity: selectedCards.some(c => c.id === card.id) ? 0.5 : 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt={card.name}
                  />
                  <CardContent>
                    <Typography>{card.name}</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={generateReading}
              disabled={selectedCards.length !== 3}
            >
              鑑定開始
            </Button>
          </Box>
        </Paper>
      ) : (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            鑑定結果
          </Typography>
          {results.map((reading, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                mb: 2,
                borderLeft: '4px solid #000',
              }}
            >
              <Typography variant="h6" gutterBottom>
                オプション {String.fromCharCode(65 + index)}
              </Typography>
              <Typography>{reading}</Typography>
            </Paper>
          ))}
          <Button
            variant="outlined"
            color="primary"
            onClick={resetReading}
          >
            また鑑定する
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default App;
