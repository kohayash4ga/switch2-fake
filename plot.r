library(tidyverse)

prob <- 0.118
x_vals <- 0:30

data <- data.frame(
  x = x_vals,
  PMF = dgeom(x_vals, prob),
  CDF = pgeom(x_vals, prob)
)

data_long <- data |>
  pivot_longer(cols=c("PMF","CDF"), names_to="Type",values_to="Probability")


gg <- ggplot(data_long, aes(x=x,y=Probability)) +
 geom_col(fill='steelblue') +
 facet_wrap(~Type,scales='free_y') +
 labs(
  title=paste('Geometric Distribution PMF and CDF with p =', prob),
  x='Number of Trials (x)',
  y='Probability/Cumulative Probability'
  ) +
 theme_minimal(
 )

# 横長に保存（例：幅10インチ × 高さ4インチ）
ggsave("geom_distribution.png", gg, width = 10, height = 4, dpi = 300)


1/prob

# シミュレーション回数
n <- 100000

# rgeom は「失敗回数」を返す → 試行回数にするには +1
simulated_trials <- rgeom(n, prob = p) + 1

# 平均試行回数（シミュレート期待値）
mean_sim <- mean(simulated_trials)

# 結果出力
cat("シミュレーションによる平均試行回数:", mean_sim, "\n")
