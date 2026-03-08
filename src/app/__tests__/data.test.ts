import { items, filterItems } from "@/data/items";
import { builds, getPopularBuilds, getBuildsByDifficulty, filterBuilds } from "@/data/builds";
import { newsArticles, getLatestNews, filterNews } from "@/data/news";
import { acts, getActById } from "@/data/leveling";
import { craftableBases, craftingOrbs } from "@/data/crafting";
import { buildDetails, getBuildDetailById } from "@/data/buildDetails";

describe("Items data", () => {
  it("has items", () => {
    expect(items.length).toBeGreaterThan(0);
  });

  it("all items have required fields", () => {
    for (const item of items) {
      expect(item.id).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.rarity).toBeTruthy();
      expect(Array.isArray(item.stats)).toBe(true);
      expect(Array.isArray(item.tags)).toBe(true);
    }
  });

  it("filterItems by category", () => {
    const weapons = filterItems(items, { category: "weapon" });
    expect(weapons.length).toBeGreaterThan(0);
    weapons.forEach((i) => expect(i.category).toBe("weapon"));
  });

  it("filterItems by rarity", () => {
    const uniques = filterItems(items, { rarity: "unique" });
    uniques.forEach((i) => expect(i.rarity).toBe("unique"));
  });

  it("filterItems by search", () => {
    const results = filterItems(items, { search: "cyclone" });
    results.forEach((i) =>
      expect(
        i.name.toLowerCase().includes("cyclone") ||
          i.baseName.toLowerCase().includes("cyclone") ||
          i.tags.some((t) => t.includes("cyclone")) ||
          i.type.toLowerCase().includes("cyclone")
      ).toBe(true)
    );
  });

  it("filterItems with no filter returns all", () => {
    expect(filterItems(items, {}).length).toBe(items.length);
  });
});

describe("Builds data", () => {
  it("has builds", () => {
    expect(builds.length).toBeGreaterThan(0);
  });

  it("all builds have required fields", () => {
    for (const build of builds) {
      expect(build.id).toBeTruthy();
      expect(build.name).toBeTruthy();
      expect(build.ascendancy).toBeTruthy();
      expect(build.mainSkill).toBeTruthy();
      expect(typeof build.popularity).toBe("number");
    }
  });

  it("getPopularBuilds returns sorted by popularity", () => {
    const popular = getPopularBuilds(5);
    for (let i = 1; i < popular.length; i++) {
      expect(popular[i - 1].popularity).toBeGreaterThanOrEqual(popular[i].popularity);
    }
  });

  it("getPopularBuilds respects limit", () => {
    expect(getPopularBuilds(3).length).toBeLessThanOrEqual(3);
  });

  it("getBuildsByDifficulty filters correctly", () => {
    const beginners = getBuildsByDifficulty("beginner");
    beginners.forEach((b) => expect(b.difficulty).toBe("beginner"));
  });

  it("filterBuilds by difficulty", () => {
    const results = filterBuilds(builds, { difficulty: "beginner" });
    results.forEach((b) => expect(b.difficulty).toBe("beginner"));
  });

  it("filterBuilds by ascendancy", () => {
    const results = filterBuilds(builds, { ascendancy: "Slayer" });
    results.forEach((b) => expect(b.ascendancy).toBe("Slayer"));
  });
});

describe("News data", () => {
  it("has articles", () => {
    expect(newsArticles.length).toBeGreaterThan(0);
  });

  it("getLatestNews returns sorted by date descending", () => {
    const latest = getLatestNews(9999);
    for (let i = 1; i < latest.length; i++) {
      expect(new Date(latest[i - 1].date).getTime()).toBeGreaterThanOrEqual(
        new Date(latest[i].date).getTime()
      );
    }
  });

  it("filterNews by category", () => {
    const patchNotes = filterNews(newsArticles, { category: "patch-notes" });
    patchNotes.forEach((a) => expect(a.category).toBe("patch-notes"));
  });

  it("filterNews by search", () => {
    const results = filterNews(newsArticles, { search: "patch" });
    results.forEach((a) =>
      expect(
        a.title.toLowerCase().includes("patch") || a.summary.toLowerCase().includes("patch")
      ).toBe(true)
    );
  });
});

describe("Leveling data", () => {
  it("has 10 acts", () => {
    expect(acts.length).toBe(10);
  });

  it("acts are numbered 1–10", () => {
    const ids = acts.map((a) => a.id).sort((a, b) => a - b);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("each act has zones and tips", () => {
    acts.forEach((act) => {
      expect(act.zones.length).toBeGreaterThan(0);
      expect(act.tips.length).toBeGreaterThan(0);
    });
  });

  it("getActById returns correct act", () => {
    const act1 = getActById(1);
    expect(act1?.id).toBe(1);
    expect(act1?.name).toContain("Act 1");
  });

  it("getActById returns undefined for invalid id", () => {
    expect(getActById(99)).toBeUndefined();
  });
});

describe("Crafting data", () => {
  it("has craftable bases", () => {
    expect(craftableBases.length).toBeGreaterThan(0);
  });

  it("all bases have affix pools", () => {
    craftableBases.forEach((base) => {
      expect(base.affixPool.length).toBeGreaterThan(0);
    });
  });

  it("has all crafting orbs", () => {
    expect(craftingOrbs.length).toBe(10);
    const orbNames = craftingOrbs.map((o) => o.name);
    expect(orbNames).toContain("Chaos Orb");
    expect(orbNames).toContain("Exalted Orb");
    expect(orbNames).toContain("Orb of Alchemy");
  });
});

describe("BuildDetails data", () => {
  it("has build details", () => {
    expect(buildDetails.length).toBeGreaterThan(0);
  });

  it("all build details have required base fields", () => {
    for (const bd of buildDetails) {
      expect(bd.id).toBeTruthy();
      expect(bd.name).toBeTruthy();
      expect(bd.mainSkill).toBeTruthy();
      expect(typeof bd.popularity).toBe("number");
    }
  });

  it("all build details have gear progression", () => {
    buildDetails.forEach((bd) => {
      expect(bd.gearProgression.length).toBeGreaterThan(0);
      bd.gearProgression.forEach((tier) => {
        expect(tier.tier).toBeTruthy();
        expect(tier.label).toBeTruthy();
        expect(tier.estimatedCost).toBeTruthy();
        expect(tier.items.length).toBeGreaterThan(0);
      });
    });
  });

  it("all build details have passive clusters", () => {
    buildDetails.forEach((bd) => {
      expect(bd.passiveClusters.length).toBeGreaterThan(0);
      bd.passiveClusters.forEach((cluster) => {
        expect(cluster.name).toBeTruthy();
        expect(cluster.nodes.length).toBeGreaterThan(0);
        expect(["core", "important", "optional"]).toContain(cluster.priority);
      });
    });
  });

  it("all build details have skill links", () => {
    buildDetails.forEach((bd) => {
      expect(bd.skillLinks.length).toBeGreaterThan(0);
      bd.skillLinks.forEach((link) => {
        expect(link.name).toBeTruthy();
        expect(link.gems.length).toBeGreaterThan(0);
      });
    });
  });

  it("all build details have leveling notes", () => {
    buildDetails.forEach((bd) => {
      expect(bd.levelingNotes.length).toBeGreaterThan(0);
      bd.levelingNotes.forEach((note) => {
        expect(typeof note.level).toBe("number");
        expect(note.note).toBeTruthy();
      });
    });
  });

  it("all build details have power leveling tips", () => {
    buildDetails.forEach((bd) => {
      expect(bd.powerLevelingTips.length).toBeGreaterThan(0);
    });
  });

  it("getBuildDetailById returns correct detail", () => {
    const detail = getBuildDetailById("cyclone-slayer");
    expect(detail?.id).toBe("cyclone-slayer");
    expect(detail?.name).toBe("Cyclone Slayer");
  });

  it("getBuildDetailById returns undefined for unknown id", () => {
    expect(getBuildDetailById("not-a-real-build")).toBeUndefined();
  });

  it("gear progression tiers use valid tier labels", () => {
    const validTiers = ["leveling", "budget", "mid", "endgame"];
    buildDetails.forEach((bd) => {
      bd.gearProgression.forEach((tier) => {
        expect(validTiers).toContain(tier.tier);
      });
    });
  });

  it("skill link gems have valid types", () => {
    buildDetails.forEach((bd) => {
      bd.skillLinks.forEach((link) => {
        link.gems.forEach((gem) => {
          expect(["active", "support"]).toContain(gem.type);
          expect(typeof gem.essential).toBe("boolean");
        });
      });
    });
  });

  it("leveling notes are ordered by level ascending", () => {
    buildDetails.forEach((bd) => {
      for (let i = 1; i < bd.levelingNotes.length; i++) {
        expect(bd.levelingNotes[i].level).toBeGreaterThan(bd.levelingNotes[i - 1].level);
      }
    });
  });
});
